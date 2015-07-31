app.controller("UnitController", function ($scope) {

    $scope.selected = 0;

    $scope.checkPound = function () {

        if (isNaN($scope.kilo)) {
            return true;
        } else {
            $scope.pound = $scope.kilo * 2.2;
            return false;

        }
    };

    $scope.checkWeight = function () {

        if (isNaN($scope.pound)) {

            return true;
        } else {
            $scope.kilo = $scope.pound / 2.2;
            return false;

        }
    };

    $scope.checkMile = function () {

        if (isNaN($scope.kilometer)) {
            return true;
        } else {
            $scope.mile = $scope.kilometer * (0.621371);
            return false;

        }
    };

    $scope.checkKilometer = function () {

        if (isNaN($scope.mile)) {
            return true;
        } else {
            $scope.kilometer = $scope.mile / (0.621371);
            return false;

        }
    };


    $scope.checkGallon = function () {

        if (isNaN($scope.litr)) {
            return true;
        } else {
            $scope.gallon = $scope.litr * (0.264172);
            return false;

        }
    };

    $scope.checkLtr = function () {

        if (isNaN($scope.gallon)) {
            return true;
        } else {
            $scope.litr = $scope.gallon / (0.264172);
            return false;

        }
    };


    $scope.setState = function (value) {
        $scope.selected = value;
        console.log(value)
    }

    $scope.getState = function (value1) {
        if ($scope.selected == value1)
            return true;
        else
            return false;
    }

});