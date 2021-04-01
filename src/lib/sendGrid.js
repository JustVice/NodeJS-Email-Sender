/**
 * Sends an email using SendGrid service.
 * @param { Object } args 
 * @param { String } "args.subject" for email subject.
 * @param { String } "args.text" for plaintext content.
 * @param { String } "args.html" for HTML content.
 * @param { String } "args.ipAddress" IP address of client.
 */
module.exports = async function sendEmail(args) {
  require('dotenv').config();
  const sgMail = require('@sendgrid/mail'),
    date = new Date(),
    messageEnd = "<br>Date: " + date + ". IP address: " + args.ipAddress + "";

  let subject = "No subject",
    text = "No text." + messageEnd,
    html = "No HTML. " + messageEnd;

  sgMail.setApiKey(process.env.SENDGRID_API); // SendGrid API.

  if (args.subject)
    subject = args.subject;

  if (args.text)
    text = args.text + messageEnd;

  if (args.html)
    html = args.html + messageEnd;

  // Message structure.
  const msg = {
    to: process.env.SENDGRID_MAILTO,
    from: process.env.SENDGRID_MAILFROM,
    subject: subject,
    text: text,
    html: html,
  };

  return await sgMail.send(msg);
}