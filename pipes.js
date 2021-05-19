var http =require('http');
var fs=require('fs');

// var myReadableStream=fs.createReadStream(
//     __dirname+'/ReadMe.txt','utf8');

// var myWritableStream=fs.createWriteStream(
//     __dirname+'/writeme.txt');

// // myReadableStream.on('data',function(chunk){
// //     console.log('New chunk recived');
// //     myWritableStream.write(chunk);
// //     // console.log(chunk);
// // });

// myReadableStream.pipe(myWritableStream);

var server=http.createServer(function(req,res){
    console.log('Request was made '+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadableStream=fs.createReadStream(__dirname+'/ReadMe.txt','utf8');
    myReadableStream.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log("Success!I'm listing from port 3000");
