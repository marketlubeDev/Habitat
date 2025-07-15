@echo off
echo Setting up Habitat Backend Server...
echo.

cd backend

echo Installing dependencies...
npm install

echo.
echo Creating environment file...
if not exist .env (
    copy env.example .env
    echo Environment file created! Please edit .env with your email credentials.
) else (
    echo Environment file already exists.
)

echo.
echo Setup complete!
echo.
echo Next steps:
echo 1. Edit backend/.env file with your email credentials
echo 2. Run: cd backend && npm run dev
echo 3. Your backend will be available at http://localhost:5000
echo.
echo For Gmail setup:
echo - Use your Gmail address as EMAIL_USER
echo - Generate an App Password from Google Account settings
echo - Use the App Password as EMAIL_PASS
echo.
pause