app.controller("BmiController", function ($scope) {

    $scope.bmiCalculate = function () {


        var heightV = parseInt($scope.height),
            weightV = parseInt($scope.weight);

        if (heightV == undefined || weightV == undefined) {
            alert("you have to enter both values");
        } else if (heightV == "" && weightV == "" || isNaN(heightV) && isNaN(weightV)) {
            alert("you have to enter both fields and it must be numbers");

        } else {
            $scope.Result = $scope.weight / ($scope.height * $scope.height);

        }
    };

});