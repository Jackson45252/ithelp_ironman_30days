var express = require('express');
var app = express();


app.set('views', __dirname + '/views');

app.set('view engine', 'jade');


app.get('/', function(req, res){
  res.render('index',{title: 'index',msg2: 'Lez Template'});
});

console.log(module.parent);
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
