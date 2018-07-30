var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var todoRoutes = require('./routes/todos')
app.use('/api/todos', todoRoutes)

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.listen(port, function() {
    console.log("App is running on Port " + port);
})



app.get('/', function(req, res) {
    res.sendFile("index.html");
})
