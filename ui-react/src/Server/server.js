// server.js (Node.js backend)
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API endpoint to send OTP email
app.post('/send-otp', (req, res) => {
  const { email, otp } = req.body;

  const msg = {
    to: email,
    from: 'dharanidharans175@gmail.com',
    subject: 'Your OTP for password reset',
    text: `Your OTP is: ${otp}`,
    // You can customize the email template as needed
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).json({ message: 'OTP email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the OTP email' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
