var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
//建立一個伺服器
var server = http.createServer(function(req,res){
	//收到網址要求並將其解析
	var filename = url.parse(req.url).pathname;
	//將解析後的網址轉為檔案路徑
	var filepath = path.join(__dirname,filename);

	//判斷路徑下的檔案是否存在
	fs.exists(filepath,function(exists){
		//不存在，回傳404頁面給客戶端跳出
		if(!exists){
			//前者404為HTTP狀態碼，後面則是內容類型，這邊是HTML文字，編碼用utf-8
			res.writeHead(404,{'Content-Type': 'text/html; charset=utf-8'});
			res.end('<h1 style="color:red">404 Not Found!</h1>\n');
			return;
		}
		//存在，則將存取檔案內容呈現在瀏覽器上
		fs.readFile(filepath,function(err,content){
			res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
			//存取過程失敗則會執行此行
			if (err){
				res.end('<h1 style="color:red">存取失敗</h1>\n');
				return;
			}
			res.end(content);
		})
	})
});

//監聽port:12345
server.listen(12345);

//網址為本地端：127.0.0.1:12345
console.log('Server Running!');
