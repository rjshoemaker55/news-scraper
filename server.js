var express = require("express");
var exphbs = require("express-handlebars");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: String,
    timeStamp: String,
    summary: String,
    link: String,
    imgUrl: String,
    saved: Boolean
})

var Story = mongoose.model('Blog', newsSchema)

var app = express();
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

  require("./apiRoutes")(app);

  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))