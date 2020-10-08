/**
 * Sends an email with given parameters as object.
 * @param {string, string, string} args 
 * "args.subject" for email subject.
 * "args.text" for plaintext content.
 * "args.html" for HTML content.
 * "args.ipAddress" IP address of client.
 */
module.exports = function sendEmail(args) {
  // Config and requirements.
  const sgMail = require('@sendgrid/mail');
  const datetime = new Date();
  const messageEnd = "||||Date: " + datetime + ". IP address: " + args.ipAddress + "||||";
  sgMail.setApiKey(process.env.VMAILER_SENDGRID_API); // SendGrid API.
  require('dotenv').config();

  let subject = "No subject";
  let text = "No text." + messageEnd;
  let html = "No HTML. " + messageEnd;

  if (args.subject) {
    subject = args.subject;
  }

  if (args.text) {
    text = args.text + messageEnd;
  }

  if (args.html) {
    html = args.html + messageEnd;
  }

  // Message structure.
  const msg = {
    to: process.env.VMAILER_TO,
    from: process.env.VMAILER_FROM,
    subject: subject,
    text: text,
    html: html,
  };

  // Email send function.
  sgMail.send(msg)
    .then((msg) => { console.log(msg) })
    .catch((err) => { console.log(err) });
}