app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when("/MathCalculator", {
            templateUrl: "calculator.html"
        })
        .when("/unitConverter", {
            templateUrl: "unitConverter.html"
        })
        .when("/bmi", {
            templateUrl: "bmi.html"
        })
        .when("/Weight", {
            templateUrl: "weightConverter.html"
        })
        .when("/Distance", {
            templateUrl: "distanceConverter.html"
        })
        .when("/Volume", {
            templateUrl: "volumeConverter.html"
        })
        .otherwise({
            redirectTo: "/MathCalculator"
        });

}]);