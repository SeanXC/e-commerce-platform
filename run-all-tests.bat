@echo off
echo ========================================
echo       E-commerce Platform Test Suite
echo ========================================
echo.

echo [1/4] Running Backend Tests...
echo.

echo --- Testing AddToCart Service ---
cd backend\addToCart
call .\mvnw.cmd test
if %errorlevel% neq 0 (
    echo ERROR: AddToCart tests failed!
    pause
    exit /b 1
)
echo AddToCart Service tests passed
echo.

echo --- Testing ProductDetails Service ---
cd ..\productdetailsservice
call .\mvnw.cmd test
if %errorlevel% neq 0 (
    echo ERROR: ProductDetails tests failed!
    pause
    exit /b 1
)
echo ProductDetails Service tests passed
echo.

echo --- Testing UserMetadata Service ---
cd ..\usermetadata
call .\mvnw.cmd test
if %errorlevel% neq 0 (
    echo ERROR: UserMetadata tests failed!
    pause
    exit /b 1
)
echo UserMetadata Service tests passed
echo.

echo [2/4] Running Frontend Tests...
echo.
cd ..\..\frontend
call npm test -- --watchAll=false
if %errorlevel% neq 0 (
    echo ERROR: Frontend tests failed!
    pause
    exit /b 1
)
echo Frontend tests passed
echo.

echo ========================================
echo           ALL TESTS PASSED!
echo ========================================
echo.
echo Test Reports Available:
echo Backend: backend/*/target/surefire-reports/
echo Frontend: Test results displayed above
echo.
echo Press any key to exit...
pause > nul
