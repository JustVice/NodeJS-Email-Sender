const express = require('express')
const app = express()
require('dotenv').config();

// Config
app.set("PORT", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // No complex files understanding like images.
app.use(express.json()); // Server understands JSON.

// Routes.
app.use(require("./routes/index.js"));

app.listen(app.get("PORT"), () => {
  console.log(`Application running on port ${app.get("PORT")}. Version: 1.0.0`)
})

// Tutorial used (Spanish): https://youtu.be/bK3AJfs7qNY