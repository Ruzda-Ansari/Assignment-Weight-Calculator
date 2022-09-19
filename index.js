var express=require ('express');
var app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/App.js');
});

app.get('/API',function(req,res){
    res.send(req.query.name);
});

app.listen(7000,()=>{
    console.log("listening on port 7000")
});

