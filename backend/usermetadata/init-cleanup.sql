-- User metadata database cleanup script
-- This script cleans duplicate records and ensures data integrity

-- Remove duplicate records, keeping only the one with the smallest ID
DELETE u1 FROM user u1 
INNER JOIN user u2 
WHERE u1.id > u2.id 
AND u1.unique_id = u2.unique_id;

-- Add unique constraint if it doesn't exist
-- Note: This will fail if constraint already exists, which is fine
SET @sql = (
    SELECT IF(
        (SELECT COUNT(*) FROM INFORMATION_SCHEMA.STATISTICS 
         WHERE table_schema = DATABASE() 
         AND table_name = 'user' 
         AND index_name = 'unique_user_id') > 0,
        'SELECT ''Unique constraint already exists'' as message;',
        'ALTER TABLE user ADD UNIQUE KEY unique_user_id (unique_id);'
    )
);

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Display final user count
SELECT 'Total users:' as status, COUNT(*) as count FROM user;

-- Check for any remaining duplicates
SELECT 'Remaining duplicates:' as status, COUNT(*) as count 
FROM (
    SELECT unique_id 
    FROM user 
    GROUP BY unique_id 
    HAVING COUNT(*) > 1
) as duplicates;
