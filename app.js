const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Starting  Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});

//Add Faker
const faker = require('faker');
let fakerData = faker.internet.email();

//Routing
app.get("/", function(req,res){
	res.render("index.html", {"fakerData":fakerData});
});

app.get("/popular", function(req,res){
	res.render("popular.html");
});

app.get("/upgrades", function(req,res){
	res.render("upgrades.html");
});

app.get("/uses", function(req,res){
	res.render("uses.html");
});


