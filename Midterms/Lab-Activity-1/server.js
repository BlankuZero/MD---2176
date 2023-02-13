var express = require('express');
var app = express();

//This responds with "Hello World! on the homepage"
app.get('/', function (req, res){
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method! ');
})

//This responds to a POST request for the homepage
app.post('/', funtion (req, res){
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method.');
})

//This responds a GEt request for the /list_user page.
app.get('list_user', function (req, res){
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})
