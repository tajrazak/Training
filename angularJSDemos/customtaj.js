//custom tag................
  			  

   var app=angular.module("app",[]);

app.directive("myDir",function(){
  			  
   	return{
   		restrict:'AEC',
   		template:'<span>Hello people</span>'
  			  	
  	  	}
  			  
    });
  				
 //providers.............

 app.provider("myprovider",function(){

 
 this.$get=function(){
 	
 		return{ 
 		value:"test"
 		}
 	
 };	
 
 });
 
 
 
 app.config(['myproviderProvider',function(provider){
 			
 			console.log(provider.$get().value);
 		
 }]);
 
 
 //factory........
 
app.factory("myfactory",function(){
 

 	return{
 	
 		firstName:"tajuddin"
 	}

 });
 
 
 //service.........
 app.service("myservice",function(){
 	
 	this.obj={lastName:"sayyad"}
 
 });
 
 //controller.......
 
 app.controller("myCtrl",['$scope','myfactory','myservice',function($scope,factory,service){
 	
		console.log(factory.firstName+" "+service.obj.lastName); 
		
 }]);
