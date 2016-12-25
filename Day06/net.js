var net = require('net');

//建立伺服器
var server = net.createServer(function(socket) {
	console.log('You get socket!');
	socket.write('123');
	
});
//監聽 12345 port
server.listen(12345, '127.0.0.1');

//建立socket連線
var client = new net.Socket();

//連線到127.0.0.1的12345 port
client.connect(12345, '127.0.0.1', function() {
	//已與伺服器建立連線
	console.log('已連線!');
});