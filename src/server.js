const express = require('express')
const app = express()
require('dotenv').config();

// Config
app.set("PORT", process.env.VMAILER_PORT || 80);
app.use(express.urlencoded({extended: false})); // No complex files understanding like images.
app.use(express.json()); // Server understands JSON.

// Routes.
app.use(require("./routes/index.js"));

app.listen(app.get("PORT"), () => {
  console.log(`Example app listening at http://localhost:${app.get("PORT")}`)
})

// Tutorial used (Spanish): https://youtu.be/bK3AJfs7qNY