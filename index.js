const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const app = express();

//console.developers.google.com

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
