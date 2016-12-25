var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/views'));

app.set('view engine', 'EJS');
app.use(bodyParser.urlencoded({ 
  
  extended: false 
}));

app.post('/result',function(req, res) {
    if(req.body.password === 1234){
    	res.render('result',{Pass:true});
    }
    else{
    	res.render('result',{Pass:false});
    }
    res.end();
});
app.listen(3000);

