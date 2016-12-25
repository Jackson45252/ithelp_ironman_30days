var express = require('express');
// var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();
app.set('view engine', 'EJS');
// 設定靜態檔案所在目錄
app.use(express.static(__dirname + '/views'));

// 設定bodyParser支援application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ 
  
  // 不用在bodyParser處理Query String
  // extended: false 
// }));

app.get('/welcome', function(req, res) {
    console.log('新的註冊者')
    console.log('ID:'+req.query.userID);
    console.log('手機:'+req.query.mobile);
    res.render('welcome',{userID:req.query.userID,mobile:req.query.mobile});
    // 回傳使瀏覽器印出輸入內容
    // res.send('ID: ' + req.query.userID + '<br/>Mobile: ' + req.query.mobile);
    res.end();
});

app.listen(3000);
