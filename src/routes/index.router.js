const { Router } = require('express');
const router = Router();

// Unique home page.
router.get('/', (req, res) => {
    res.sendFile('index.html');
});

// This route's purpose is to check if application is running.
router.get('/sendemail', (req, res) => {
    res.json({ "status": "up"});
});

// Route to send email.
router.post('/sendemail', (req, res) => {
    const sendGrid_lib = require("../lib/sendGrid");
    const userIp =req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    sendGrid_lib({
        "subject": req.body.subject,
        "text": req.body.text,
        "html": req.body.html,
        "ipAddress": userIp
    });
    res.json({ "status": "success" });
});

module.exports = router;
