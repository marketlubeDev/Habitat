# Habitat Backend Server

This is the backend server for the Focuz Habitat resort website, handling contact form submissions and email notifications.

## Features

- ✅ Contact form email processing
- ✅ Input validation and sanitization
- ✅ Rate limiting to prevent spam
- ✅ CORS configuration for frontend integration
- ✅ Security headers with Helmet
- ✅ Professional email templates
- ✅ Error handling and logging

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

1. Copy the environment example file:

```bash
cp env.example .env
```

2. Edit `.env` file with your email credentials:

#### For Gmail:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Important:** For Gmail, you need to use an "App Password" instead of your regular password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password in your `.env` file

#### For Other Email Services:

You can modify the `createTransporter` function in `server.js` to use other services like Outlook, Yahoo, etc.

### 3. Start the Server

#### Development mode (with auto-restart):

```bash
npm run dev
```

#### Production mode:

```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 999999999",
  "message": "Hello, I would like to book a room..."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon.",
  "messageId": "message-id-here"
}
```

### GET /api/health

Health check endpoint.

**Response:**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Security Features

- **Rate Limiting:** 5 requests per 15 minutes per IP
- **Input Validation:** All form fields are validated and sanitized
- **CORS Protection:** Configured to only allow requests from your frontend
- **Security Headers:** Implemented with Helmet
- **Error Handling:** Proper error responses without exposing sensitive information

## Email Template

The server sends professionally formatted HTML emails with:

- Contact information (name, email, phone)
- Formatted message content
- Timestamp and source information
- Responsive design

## Troubleshooting

### Common Issues:

1. **Email not sending:**

   - Check your email credentials in `.env`
   - Ensure you're using an app password for Gmail
   - Check if your email service allows SMTP access

2. **CORS errors:**

   - Verify `FRONTEND_URL` in your `.env` file
   - Make sure your frontend is running on the correct port

3. **Rate limiting:**
   - The server limits to 5 requests per 15 minutes per IP
   - This prevents spam and abuse

### Logs:

The server logs all email sending attempts and errors to the console.

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Use a process manager like PM2
3. Set up a reverse proxy (nginx/Apache)
4. Use environment-specific email configurations
5. Set up proper SSL certificates

## Support

For issues or questions, check the logs and ensure all environment variables are properly configured.
