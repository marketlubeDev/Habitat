@echo off
echo Starting Habitat Full Development Environment...
echo.

echo Checking if backend dependencies are installed...
if not exist "backend\node_modules" (
    echo Backend dependencies not found. Installing...
    cd backend
    npm install
    cd ..
    echo Backend dependencies installed!
) else (
    echo Backend dependencies found.
)

echo.
echo Starting both frontend and backend servers...
echo Frontend will be available at: http://localhost:5173
echo Backend will be available at: http://localhost:5000
echo.
echo Press Ctrl+C to stop both servers
echo.

npm run dev:full