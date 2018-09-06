angular
.module('app')
.controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', '$state'];
function loginCtrl($scope, $state) {
    $scope.login = {
        userName: "",
        password: ""
    }
    $scope.loginClick = function(){
        $state.go('app.main')
    }
}