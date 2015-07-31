app.controller("FormCtrl", ['studentService', '$scope', function (studentService, $scope) {

    $scope.saveDetails = function () {

        studentService.studentDetails.push($scope.data);
        $scope.data = {};
        $scope.myForm.$setPristine();


    };



            }]).controller("ShowDetailsCtrl", ['studentService', '$scope', function (studentService, $scope) {

    this.showDetails = function () {

        return studentService.studentDetails;

    };

}]).controller("SwitchController", function () {

    this.tab = 1;

    this.setStatus = function (value) {

        this.tab = value;

    };

    this.getStatus = function (value) {

        if (this.tab == value)
            return true;
        else
            return false;
    };

}).controller("DeleteController", ['studentService', '$scope', function (studentService, $scope) {

    this.deleteData = function (index) {

        studentService.studentDetails.splice(index, 1);
        $scope.deleteIndex = "";

    };

}]).controller("EditController", ['studentService', '$scope', function (studentService, $scope) {


    this.getDetails = function () {
        return studentService.studentDetails;
    };

}])