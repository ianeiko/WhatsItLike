function MainApp($scope, $http){
    $scope.init = function(){
        $http.get('data/bali.json').success(function(data) {
            $scope.data = data;
        });
    }
    $scope.init();
}