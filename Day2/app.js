var fs = require('fs');
fs.readFile('test.js',function(err,file){
	console.log(file);
	console.log('檔案讀取完成!');
})
console.log('檔案讀取開始!');