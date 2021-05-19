var fs=require('fs');

// var readme=fs.readFileSync('ReadMe.txt','utf8'); //synch

// console.log(readme);

// var writeit=fs.writeFileSync('writeme.txt',readme);//synch aadhi ha excute hoil mg ntrche codes


// var fs = require('fs');



fs.readFile('ReadMe.txt','utf8',function(err,data){
    // fs.writeFile('writeme.txt', data);
    fs.writeFile("writeme.txt", data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
});

 