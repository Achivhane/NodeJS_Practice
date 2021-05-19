var express=require('express');

var app=express();

app.get('/profile/:id',function(req,res){
    res.send('You want to see data of employee id:'+req.params.id);
});
app.get('/profile/:name',function(req,res){
    res.send('You want to see data of employee name:'+req.params.name);
});


app.listen(3000);