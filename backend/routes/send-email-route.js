const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Validation middleware
const validateEmailRequest = (req, res, next) => {
  const { username, email, complaintId, description } = req.body;
  
  if (!email || !complaintId || !description) {
    return res.status(400).json({ 
      error: "Email, complaintId, and description are required" 
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  
  next();
};

router.post("/send-email", validateEmailRequest, async (req, res) => {
  const { email, complaintId, username = "Customer", description } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Format date
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Create email HTML content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Complaint Registration</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
        <tr>
          <td style="padding: 20px; background-color: #ffffff;">
            <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Complaint Registration Confirmation</h1>
            
            <p>Dear ${username},</p>
            
            <p>Your complaint has been successfully registered in our system.</p>
            
            <div style="background-color: #f7f7f7; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <p style="margin: 5px 0;"><strong>Date:</strong> ${currentDate}</p>
              <p style="margin: 5px 0;"><strong>Complaint ID:</strong> ${complaintId}</p>
              <p style="margin: 5px 0;"><strong>Description:</strong></p>
              <p style="margin: 5px 0; padding: 10px; background-color: #ffffff; border-radius: 3px;">${description}</p>
            </div>
            
            <p>Our team will review your complaint and take necessary action as soon as possible.</p>
            
            <div style="margin: 20px 0; padding: 10px; border-left: 4px solid #0066cc; background-color: #f0f7ff;">
              <p style="margin: 0;"><strong>Important:</strong> Please keep your Complaint ID (${complaintId}) for future reference.</p>
            </div>
            
            <p>If you have any questions or need to provide additional information, please don't hesitate to contact us.</p>
            
            <div style="margin-top: 30px; border-top: 1px solid #eeeeee; padding-top: 20px;">
              <p style="margin: 0;">Best regards,</p>
              <p style="margin: 5px 0;"><strong>Customer Support Team</strong></p>
            </div>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Email options
  const mailOptions = {
    from: `"Support Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Complaint Registered Successfully',
    html: emailHtml,
    // Plain text alternative
    text: `
Complaint Registration Confirmation

Dear ${username},

Your complaint has been successfully registered in our system.

Complaint Details:
-----------------
Date: ${currentDate}
Complaint ID: ${complaintId}
Description: ${description}

Our team will review your complaint and take necessary action as soon as possible.

IMPORTANT: Please keep your Complaint ID (${complaintId}) for future reference.

If you have any questions or need to provide additional information, please don't hesitate to contact us.

Best regards,
Customer Support Team
    `
  };

  try {
    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    
    return res.status(200).json({ 
      message: "Email sent successfully",
      messageId: info.messageId,
      complaintId: complaintId
    });
  } catch (error) {
    console.error("Error sending email:", error);
    
    let errorMessage = "Failed to send email";
    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check credentials.";
    } else if (error.code === 'ESOCKET') {
      errorMessage = "Network error occurred while sending email";
    }

    return res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;