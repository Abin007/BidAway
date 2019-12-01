const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expstatic = express.static(__dirname + "/public");
const methodOverride = require('method-override');


const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const session = require('express-session')
app.use(methodOverride('_method'))
app.use("/public", expstatic);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}))



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
