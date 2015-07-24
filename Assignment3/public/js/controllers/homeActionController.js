app.controller('homeActionCtrl', ['$scope', '$http', '$location', 'socketObjService', function ($scope, $http, $location, socketObjService) {


    var socket = socketObjService.getSocketConn();

    $scope.post = {};

    $http.get('/checkForSession').success(function (data) {
        if (!data) {
            $location.path("/");
        } else {
            $scope.$broadcast('userProfileName', {
                profilename: data
            })
            console.log(data)
        }
    })


    //saving the post in the database..............................

    $scope.addPost = function () {

        $http.post('/postContent', $scope.post).success(function (data) {

            console.log(data);

            $scope.$broadcast('postedData', data); //it broadcast the data to child controller.....this broadcast call the on function which is in postdirective...........
            $scope.post = {};


            socket.emit('updatePostWall', data);



        })

    }



    socket.on('updatePost', function (msg) {
        console.log("im from broadcast")
        console.log(msg);

        $scope.$broadcast('socketContent', msg); //this broadcast call the on function which is in postdirective.........................
    })
}])