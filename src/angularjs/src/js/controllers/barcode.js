angular
.module('app')
.controller('barcodeCtrl', barcodeCtrl);

barcodeCtrl.$inject = ['$scope', '$state'];
function barcodeCtrl($scope, $state) {
    
    $scope.scanClick = function(){
        // alert('ok');
        cordova.plugins.barcodeScanner.scan(function(result){
            //success callback
            alert(JSON.stringify(result));
           
            },function(error){
            //error callback
            alert(JSON.stringify(error));
           
            });
    }
}