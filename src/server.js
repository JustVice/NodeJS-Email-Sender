const express = require('express')
const app = express()
require('dotenv').config();

// Config
app.set("PORT", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // No complex files understanding like images.
app.use(express.json()); // Server understands JSON.

// Setting the application to response it's API to any domain on the web.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes.
app.use(require("./routes/index.js"));

app.listen(app.get("PORT"), () => {
  console.log(`Application running on port ${app.get("PORT")}. Version: 1.0.0`)
})

// Tutorial used (Spanish): https://youtu.be/bK3AJfs7qNY