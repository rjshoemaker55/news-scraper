// Require in express, handlebars, and mongoose
var express = require("express")
var exphbs = require("express-handlebars")
const mongoose = require('mongoose')


// Require in Story model from Story.js
const Story = require('./models/Story')

// Express server setup
var app = express();
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"))

// Handlebars setup
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Connect to the Mongo DB with Mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsdb";
mongoose.connect(MONGODB_URI);
mongoose.set('useFindAndModify', false);

// Setup apiroutes
require("./routes/apiRoutes")(app);
require('./routes/htmlroutes')(app)

// Start express server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))