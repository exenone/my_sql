var mysql = require('mysql');
var express =require('express');
var app=express();
const bodyParser = require('body-parser')

const http = require('http');

const hostname = 'localhost';
const port = 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

// parse an HTML body into a string 
//app.use(bodyParser.text({ type: 'text/html' }))
//---------------views--------------------------------------------------------


app.use(express.static('public'));
app.use(express.static('src/views'));

//--------------end views-----------------------------------------------------



//------------------------------------------------------------------------------
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lexicon_tropy"

});

con.connect(function(err) {
 if (err) throw err;
  con.query("SELECT * FROM group_details", function (err, result, fields) {
    if (err) throw err;
    //result.send(JSON.stringify(
       //result.button.vest));
 console.log(result);
   // con.query('src/views',function(req,res){
       // result.send(req.body.cream);
        //result.sendFile(__dirname + './index.html');
    //});
    
    
    

});
});




//-------------------------------------------------------------------------------------


app.listen(port, hostname, (err) => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });