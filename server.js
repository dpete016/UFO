var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));


require("./app/routes/api-routes.js")(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})