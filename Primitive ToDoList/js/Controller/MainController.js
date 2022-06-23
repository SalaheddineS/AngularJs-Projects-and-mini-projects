app.controller('MainController', ['$scope', function($scope) {
    $scope.list = ["Practice Programming", "Do Cardio", "Eat Protein"];

    $scope.addItem = function() {
        $scope.list.push($scope.add);
    }

}])