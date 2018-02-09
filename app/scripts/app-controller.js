gamesWithRatingApp.controller('GamesCtrl',function ($scope, GamesService) {
    var promiseObj = GamesService.getData();
    promiseObj.then(function(jsonData) {
        $scope.ratings=jsonData;
    });

});