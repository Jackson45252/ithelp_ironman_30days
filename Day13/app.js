var express = require('express');
var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();

// 設定靜態檔案所在目錄
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'EJS');

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
  
  // 不用在bodyParser處理Query String
  extended: false 
}));

app.post('/welcome', function(req, res) {
    console.log('新的訪客')
    console.log('名字:'+req.body.name);
    console.log('來自:'+req.body.country);

    // 回傳使瀏覽器印出輸入內容
    res.render('welcome',{userID:req.query.userID,mobile:req.query.mobile});
    // res.send('名字: ' + req.body.name + '<br/>國家: ' + req.body.country);
    res.end();
});

app.listen(3000);
