var fs=require('fs');

var myReadableStream=fs.createReadStream(
    __dirname+'/ReadMe.txt','utf8');

var myWritableStream=fs.createWriteStream(
    __dirname+'/writeme.txt');

myReadableStream.on('data',function(chunk){
    console.log('New chunk recived');
    myWritableStream.write(chunk);
    // console.log(chunk);
});

