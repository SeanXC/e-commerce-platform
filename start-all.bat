@echo off
echo Starting E-commerce Platform Services...
echo.

echo 1. Starting Product Service (Port: 8082)...
start "Product Service" cmd /k "cd backend\productdetailsservice && .\mvnw.cmd spring-boot:run"

echo 2. Starting Cart Service (Port: 8081)...
start "Cart Service" cmd /k "cd backend\addToCart && .\mvnw.cmd spring-boot:run"

echo 3. Starting User Service (Port: 8083)...
start "User Service" cmd /k "cd backend\usermetadata && .\mvnw.cmd spring-boot:run"

echo Waiting 5 seconds for backend services to start...
timeout /t 5 /nobreak > nul

echo 4. Starting React Frontend (Port: 3000)...
start "React Frontend" cmd /k "cd frontend && npm start"

echo.
echo All services started!
echo.
echo Access URLs:
echo Frontend: http://localhost:3000
echo Product Service: http://localhost:8082/ecommerce/products/getALlProducts
echo Cart Service: http://localhost:8081/ecommerce/addToCart
echo User Service: http://localhost:8083/ecommerce/user
echo.
echo Press any key to exit...
pause > nul
