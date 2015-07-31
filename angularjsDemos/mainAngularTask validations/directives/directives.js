"use strict"

app.directive("myUser", function () {

    return {
        restrict: 'E',
        template: "<div class='col-sm-4'><br><span ng-show='myForm.user.$dirty && myForm.user.$error.required'>required username</span></div>"
    }
}).directive("myPassword", function () {

    return {
        restrict: 'E',
        template: "<div class='col-sm-4'><br><span ng-show='myForm.password.$error.minlength'>too weak!</span><span id='passwordlength' ng-show='myForm.password.$error.maxlength'>good password is strong</span><span ng-show='myForm.password.$dirty && myForm.password.$error.required'> password required</span></div>"
    }
}).directive("myEmail", function () {

    return {
        restrict: 'E',
        template: "<div class='col-sm-4'><br><span ng-show='myForm.email.$dirty && myForm.email.$error.required'> email required</span><span ng-show='myForm.email.$dirty && myForm.email.$error.email && myForm.email.$invalid'>invalid email</span></div>"
    }
}).directive("myPhone", function () {

    return {
        restrict: 'E',
        template: "<div class='col-sm-4'><br><span ng-show='myForm.phone.$dirty && myForm.phone.$error.required'> phone number required</span></div>"
    };

});