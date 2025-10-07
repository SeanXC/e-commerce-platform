-- User metadata database cleanup script (PostgreSQL version)
-- This script cleans duplicate records and ensures data integrity

-- Remove duplicate records, keeping only the one with the smallest ID
DELETE FROM user_metadata u1 
USING user_metadata u2 
WHERE u1.id > u2.id 
AND u1.unique_id = u2.unique_id;

-- Add unique constraint if it doesn't exist
-- Note: This will fail if constraint already exists, which is fine
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'unique_user_id' 
        AND table_name = 'user_metadata'
        AND table_schema = current_schema()
    ) THEN
        ALTER TABLE user_metadata ADD CONSTRAINT unique_user_id UNIQUE (unique_id);
    ELSE
        RAISE NOTICE 'Unique constraint already exists';
    END IF;
END $$;

-- Display final user count
SELECT 'Total users:' as status, COUNT(*) as count FROM user_metadata;

-- Check for any remaining duplicates
SELECT 'Remaining duplicates:' as status, COUNT(*) as count 
FROM (
    SELECT unique_id 
    FROM user_metadata 
    GROUP BY unique_id 
    HAVING COUNT(*) > 1
) as duplicates;
