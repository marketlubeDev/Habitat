import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { body, validationResult } from "express-validator";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting (disabled in development)
if (process.env.NODE_ENV === "production") {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/contact", limiter);
}

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail", // You can change this to other services like 'outlook', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use app password for Gmail
    },
  });
};

// Validation middleware
const validateContactForm = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name can only contain letters and spaces"),

  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),

  body("phone")
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters")
    .matches(/^[\+]?[0-9\s\-\(\)]+$/)
    .withMessage("Please provide a valid phone number"),

  body("message")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters"),
];

// Contact form endpoint
app.post("/api/contact", validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { name, email, phone, message } = req.body;

    // Create email transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Where you want to receive emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #166534; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Contact Information:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #166534;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #166534;">${phone}</a></p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 4px solid #166534;">
                <p style="margin: 0; line-height: 1.6;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This message was sent from the Focuz Habitat contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Message:
${message}

Sent on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    // Send success response
    res.status(200).json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER}`);
  console.log(
    `🌐 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:5173"}`
  );
});
