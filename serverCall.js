var express = require('express'),
        app = express(),
         fs = require('fs'),bodyParser=require('body-parser');

app.set('index','./views');
app.set('result','./views');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.render('index.ejs');
    res.end();  
});

app.post('/display',function(req,res){

  // var selected=req.query["type"]; (this is for get Request)
    var selected=req.body.type;

   fs.readFile('data/data.json','utf8',function(err,data){
   
    if(err){
      res.end(err);
    }
    else
    {
    var obj=JSON.parse(data);
    var filteredObj=obj.filter(function(e){return e.type==selected;});
   
   res.render('result.ejs',{
           ResultData : filteredObj
   });
   res.end();
    
    }
   
   });
    
});

app.listen(3001);
