var express=require('express');
var app=express();

app.get('/:param/:param1',function(req,res){
 
  var data=parseInt(req.params.param),data2=parseInt(req.params.param1);
  res.send({"A":data,"B":data2,"Result":data+data2});
  
});

app.listen(3001);
