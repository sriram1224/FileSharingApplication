const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use false for STARTTLS
  auth: {
    user: "7a55b5001@smtp-brevo.com",
    pass: "Ta6G7fQH2DwPE3J0",
  },
  tls: {
    ciphers: "SSLv3", // Specify the TLS version
    rejectUnauthorized: false, // For testing purposes; consider removing or setting to true for production
  },
});

module.exports = transporter;
