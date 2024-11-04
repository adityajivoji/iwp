// dotenv file contains environment variables(db_connnection_link)
const dotenv = require("dotenv");
dotenv.config();

// Loading environment modules
const express = require("express");
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require("body-parser");
// cleans the pages with previoously filled values in form
const expressSanitizer = require("express-sanitizer");



// creating a connection to the app and the databse
var app = express();
require("./models/database");

// using embedded java script as view engine to load the data
app.set("view engine", "ejs");

// express looks up the static files relative to the static directory,
app.use(express.static("public"));

// The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer()); // we need to include express-sanitizer after the body-parser.



const routes = require("./routes/routes.js")
app.use("/",routes);


// //TO START EXPRESS APP
app.listen(process.env.PORT || 3000, () => {
  console.log(`Window Shopping App server is started in port 3000`);
});
