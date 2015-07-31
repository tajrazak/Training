

angular.module("shopping",['ngRoute']).config(['$routeProvider',function($routeProvider){

	$routeProvider
	.when("/tvs",{templateUrl:"tvs.html",controller:"TvItemCtrl"})
	.when("/mobiles",{templateUrl:"mobiles.html",controller:"MobileItemCtrl"})
	.otherwise({redirectTo:"/"})

}]).controller("TvItemCtrl",function($scope){
	
		$scope.TvNames=[{name:"samsung"},{name:"lg"},{name:"panasonic"},{name:"lenovo"}];
}).controller("MobileItemCtrl",function($scope){

		$scope.MobileNames=[{name:"nokia"},{name:"samsung"},{name:"windows"},{name:"micromax"}];

});
