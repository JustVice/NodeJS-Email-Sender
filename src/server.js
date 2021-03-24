const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Settings
app.set("PORT", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // No complex files understanding like images.
app.use(express.json()); // Server understands JSON.
app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes.
app.use(require("./routes/index.router.js"));

app.listen(app.get("PORT"), () => {
  console.log(`Application running on port ${app.get("PORT")}`)
})
