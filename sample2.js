var express=require('express');
var app=express();

app.get('/param',function(req,res){
 
    res.send(JSON.stringify({'a':'taj','b':'raj'}));
    
  
});

app.listen(3001);
