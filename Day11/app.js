var express = require('express');
var app = express();


app.set('views', __dirname + '/views');

app.set('view engine', 'EJS');


app.get('/', function(req, res){
  res.render('index',{title: 'EJS Template',description: 'Website:http://www.embeddedjs.com/'});
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
