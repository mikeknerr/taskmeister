var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));  
 
var todoRoutes = require('./routes/todos') 
app.use('/api/todos', todoRoutes)

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


 
app.listen(process.env.PORT, function() {
    console.log("App is running on Port " + process.env.PORT);
})



app.get('/', function(req, res) {
    res.sendFile("index.html");
})
    
