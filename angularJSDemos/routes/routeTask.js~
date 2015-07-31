"use strict";

var app=angular.module("angularApp",['ngRoute']);

//this is provider............

app.provider("firstExe",function(){	
	
	this.$get=function(){
	  	console.log("hello iam provider exeTime:"+(+new Date()));
	  	
	  	return{
	  		value:"provider return value"
	  	}

   };

});

//this is config................

app.config(['firstExeProvider',function(p){
	
	console.log(p.$get().value+" exeTime:"+(+new Date()));
}]);


//this is directive.............

app.directive("myOwn",function(){

	return{
		restrict:'E',
		template:'<h2>hello im custom directive data</h2>'
	
	}
});

//this is factory..............

app.factory("myFactory",function(){
	
	var name="im factory";
	
	return {
		
		value:name
	}
});

//this is service.................

app.service("myService",function(){

	this.obj={};
	this.obj.name="im";
	this.obj.name1="service";
});


//this is controller.............

app.controller('theCtrl',['$rootScope','$scope','myFactory','myService',function($rootScope,$scope,factory,service){

	console.log(factory.value);
	
	console.log(service.obj.name+" "+service.obj.name1);
	$rootScope.service=service.obj.name+" "+service.obj.name1;
	$scope.factory=factory.value;
	
}]);


app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/tv",{templateUrl:"tv.html"})
	.when("/mobile",{templateUrl:"mobile.html",controller:"messageCtrl"})

}]);



app.controller("messageCtrl",['$scope',function($scope){
	$scope.message="THANK YOU";
		
}]);


