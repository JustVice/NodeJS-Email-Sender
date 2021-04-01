const { Router } = require('express');
const router = Router();

// Unique home page.
router.get('/', (req, res) => {
    res.sendFile('index.html');
});

// This route's purpose is to check if application is running.
router.get('/sendemail', (req, res) => {
    res.json({ "status": "up" });
});

// Route to send email.
router.post('/sendemail', async (req, res) => {
    const sendGrid_lib = require("../lib/sendGrid");
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const message = {
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html,
        ipAddress: userIp
    };
    const result = await sendGrid_lib(message);
    if (result[0].statusCode == 202)
        res.json({ status: 'success', description: 'email sent' })
    else
        res.json({ status: 'failed', description: 'error 500' })
});

module.exports = router;
