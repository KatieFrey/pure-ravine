const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);
//(node:70824) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

const app = express();

require("./routes/authRoutes")(app);

//console.developers.google.com

const PORT = process.env.PORT || 5000;
app.listen(PORT);
