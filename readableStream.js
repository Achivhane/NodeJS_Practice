var fs=require('fs');

var myReadableStream = fs.createReadStream(
    __dirname+'/ReadMe.txt','utf8');

myReadableStream.on('data',function(chunk){
    console.log('new chunk recived');
    console.log(chunk);
});