const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use false for STARTTLS
  auth: {
    user: "process.env.EMAIL_USER",
    pass: "process.env.EMAIL_PASS",
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
