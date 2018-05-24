var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

var Grass = require("./class/class.grass");
var EatGrass = require("./class/class.eatgrass");
var Gishatich = require("./class/class.gishatich");
var Valod = require("./class/class.valod");
var ClassM = require("./class/class");