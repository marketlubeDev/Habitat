@echo off
echo Starting Habitat Backend Server...
echo.

cd backend

echo Checking if .env file exists...
if not exist .env (
    echo ERROR: .env file not found!
    echo Please run setup-backend.bat first or create .env file manually.
    pause
    exit /b 1
)

echo Starting development server...
npm run dev