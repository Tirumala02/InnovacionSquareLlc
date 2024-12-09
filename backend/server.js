const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/send-message', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Receiver email address
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
    // Trigger success toast
    if (typeof toast !== 'undefined') toast.success('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * .env file should contain:
 * EMAIL_USER=your-email@example.com
 * EMAIL_PASS=your-email-password
 * RECEIVER_EMAIL=receiver-email@example.com
 */
