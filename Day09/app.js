//引用express模組
var express = require('express');
var app = express();

//應用程式對指向根 URL (/)作出回應
app.get('/', function (req, res) {
  res.send('你好阿～開發者!');
});

app.configure(function(){
    app.use(express.static(__dirname+'/public'));
});

app.listen(4567, function () {
  console.log('範例APP正在監聽 port 4567!');
});