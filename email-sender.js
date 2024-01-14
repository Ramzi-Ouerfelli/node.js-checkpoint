const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Define email options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Testing Nodemailer',
  text: 'Hello, this is a test email!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});