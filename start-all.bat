@echo off
echo ========================================
echo    E-commerce Platform - Hybrid Mode
echo ========================================
echo Backend Services: Docker
echo Frontend: Local Node.js
echo ========================================
echo.

echo [1/4] Starting backend services and databases...
cd backend
echo Building and starting Docker containers...
docker-compose up -d --build
cd ..

echo.
echo [2/4] Waiting for backend services to initialize...
echo Please wait while databases and backend services start up...
timeout /t 25 /nobreak > nul

echo.
echo [3/5] Initializing sample data...
echo Connecting to MongoDB to add 8 sample products...
start /wait cmd /c "mongosh mongodb://localhost:27017/productDB --file backend\productdetailsservice\init-data.js"
echo Sample data initialized successfully!

echo.
echo [4/5] Cleaning user database...
echo Removing duplicate user records and ensuring data integrity...
docker exec -i backend-postgres-usermetadata-1 psql -U postgres -d usermetadataDB < backend\usermetadata\init-cleanup.sql
echo User database cleanup completed!

echo.
echo [5/5] Starting frontend locally...
echo Starting React development server...
start "React Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo     ALL SERVICES STARTED SUCCESSFULLY!
echo ========================================
echo.
echo Access URLs:
echo Frontend:     http://localhost:3000 (Local React)
echo Product API:  http://localhost:8082/ecommerce/products/getALlProducts
echo Cart API:     http://localhost:8081/ecommerce/addToCart
echo User API:     http://localhost:8083/ecommerce/user
echo.
echo Database Ports:
echo MongoDB:        localhost:27017
echo PostgreSQL Cart: localhost:5433
echo PostgreSQL User: localhost:5434
echo.
echo Management Commands:
echo Stop backend:  docker-compose -f backend/docker-compose.yml down
echo View logs:     docker-compose -f backend/docker-compose.yml logs
echo Restart:       docker-compose -f backend/docker-compose.yml restart
echo Stop frontend: Close the React terminal window
echo.
pause
