const { Router } = require('express');
const router = Router();
const path = require("path");

// Renders a welcome page for those curious people.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

router.get('/sendemail', (req, res) => {
    res.json({ "titulo": "hello world", "ip": req.connection.remoteAddress });
});

router.post('/sendemail', (req, res) => {
    const sendGrid = require("../app/sendGrid");
    sendGrid({
        "subject": req.body.subject,
        "text": req.body.text,
        "html": req.body.html,
        "ipAddress": req.connection.remoteAddress
    })
    res.json({ "status": "success" });
});

module.exports = router;
