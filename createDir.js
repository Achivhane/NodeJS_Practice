var fs=require('fs');

// fs.mkdirSync("sttufffs");
// fs.rmdirSync("sttufffs");

// fs.mkdir('stuffs',function(){
//     fs.readFile('ReadMe.txt','utf8',function(err,data){
//         // fs.writeFile('writeme.txt', data);
//         fs.writeFile("./stuffs/writeme.txt", data, function(err) {
//             if(err) {
//                 return console.log(err);
//             }
//             console.log("The file was saved!");
//         }); 
        
//     });
// });

// fs.unlink('./stuffs/writeme.txt',function(){
    fs.rmdir('./stuffs');
// });