app.controller("CalculatorCtrl", function ($scope) {

    $scope.output = "0";
    $scope.newNumber = true;
    $scope.pendingOperation = null;
    $scope.operationToken = "";
    $scope.runningTotal = null;
    $scope.pendingValue = null;
    $scope.lastOperation = null;


    var ADD = "adding";
    var SUBTRACT = "subtracting";
    var DIVIDE = "dividing";
    var MUL = "multiplying";

    var ADD_SYMBOL = "+";
    var SUBTRACT_SYMBOL = "-";
    var MUL_SYMBOL = "*";
    var DIVIDE_SYMBOL = "/";




    $scope.updateOutput = function (btn) {
        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.newNumber = false;
        } else {
            $scope.output += String(btn);
        }
        $scope.pendingValue = changeIntoNumber($scope.output);

    };


    //addition value...............

    $scope.add = function () {

        if ($scope.pendingValue) {
            if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                $scope.runningTotal += $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationSymbol(ADD);
        setOutput(String($scope.runningTotal));
        $scope.pendingOperation = ADD;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };


    //subtract value................

    $scope.subtract = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                $scope.runningTotal -= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationSymbol(SUBTRACT);
        setOutput(String($scope.runningTotal));
        $scope.pendingOperation = SUBTRACT;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };


    //divide value...............

    $scope.divide = function () {

        if ($scope.pendingValue) {
            if ($scope.runningTotal && ($scope.pendingOperation == DIVIDE)) {
                $scope.runningTotal /= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationSymbol(DIVIDE);
        setOutput(String($scope.runningTotal));
        $scope.pendingOperation = DIVIDE;
        $scope.newNumber = true;
        $scope.pendingValue = null;

    };


    //multiply value...........

    $scope.multiplication = function () {

        if ($scope.pendingValue) {
            if ($scope.runningTotal && ($scope.pendingOperation == MUL)) {
                $scope.runningTotal *= $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationSymbol(MUL);
        setOutput(String($scope.runningTotal));
        $scope.pendingOperation = MUL;
        $scope.newNumber = true;
        $scope.pendingValue = null;

    };


    //calculate result...............

    $scope.calculate = function () {
        if (!$scope.newNumber) {
            $scope.pendingValue = changeIntoNumber($scope.output);
            $scope.lastValue = $scope.pendingValue;
        }
        if ($scope.pendingOperation == ADD) {
            $scope.runningTotal += $scope.pendingValue;
            $scope.lastOperation = ADD;
        } else if ($scope.pendingOperation == SUBTRACT) {
            $scope.runningTotal -= $scope.pendingValue;
            $scope.lastOperation = SUBTRACT;
        } else if ($scope.pendingOperation == MUL) {
            $scope.runningTotal *= $scope.pendingValue;
            $scope.lastOperation = MUL;
        } else if ($scope.pendingOperation == DIVIDE) {
            $scope.runningTotal /= $scope.pendingValue;
            $scope.lastOperation = DIVIDE;
        }
        setOutput($scope.runningTotal);
        $scope.pendingOperation = null;
        $scope.pendingValue = null;
    }




    setOutput = function (outputString) {
        $scope.output = outputString;
        $scope.newNumber = true;
    };



    setOperationSymbol = function (operation) {
        if (operation == ADD) {
            $scope.operationToken = ADD_SYMBOL;
        } else if (operation == SUBTRACT) {
            $scope.operationToken = SUBTRACT_SYMBOL;
        } else if (operation == DIVIDE) {
            $scope.operationToken = DIVIDE_SYMBOL;
        } else if (operation == MUL) {
            $scope.operationToken = MUL_SYMBOL;
        } else {
            $scope.operationToken = "";
        }
    };


    changeIntoNumber = function (numberString) {
        var result = 0;
        if (numberString) {
            result = numberString * 1;
        }
        return result;
    };



});