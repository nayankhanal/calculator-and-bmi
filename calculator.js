const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result= num1+num2;
  res.send("The result is "+ result);
});

app.post("/bmicalculator",function(req, res){
  var height= parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi= weight/Math.pow(height,2);
  res.send("Your BMI is "+ bmi);
})

app.listen(3000, function(){
  console.log("server succesfully ran at port 3000.");
});

//.urlencoded({extended: true})
