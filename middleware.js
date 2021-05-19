var express=require('express');
var app=express();



app.set('view engine','ejs');

// app.use('/assets',function(req,res,next){
//     console.log(req.url);
//     next();
// });

//express middleware

app.use('/assets',express.static('public/assets'));


app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'nija',hobbies:["eating","reading","jumping"]};
    res.render('profile',{person:req.params.name,
                        data:data});
});


app.listen(3000);