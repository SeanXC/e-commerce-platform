@echo off
echo ========================================
echo   Stopping E-commerce Platform
echo ========================================
echo.

echo [1/2] Stopping Docker backend services...
cd backend
docker-compose down
cd ..

echo.
echo [2/2] Stopping local frontend processes...
echo Checking for Node.js React processes...
tasklist /fi "imagename eq node.exe" 2>nul | find /i "node.exe" >nul
if %errorlevel% == 0 (
    echo Found Node.js processes, stopping them...
    taskkill /f /im node.exe 2>nul
    echo React development server stopped.
) else (
    echo No Node.js processes found.
)

echo.
echo Cleaning up any remaining Java processes...
tasklist /fi "imagename eq java.exe" 2>nul | find /i "java.exe" >nul
if %errorlevel% == 0 (
    echo Found Java processes, stopping them...
    taskkill /f /im java.exe 2>nul
    echo Java processes stopped.
) else (
    echo No Java processes found.
)

echo.
echo ========================================
echo     ALL SERVICES STOPPED!
echo ========================================
echo.
echo Backend (Docker): Stopped
echo Frontend (Local): Stopped  
echo Databases: Stopped
echo.
pause
