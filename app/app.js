var gamesWithRatingApp = angular.module('gamesWithRatingApp',['angularMoment']);
gamesWithRatingApp.directive('gamesData', function () {
    return {
        restrict: 'E',
        controller: 'GamesCtrl',
        templateUrl: 'games-data.html'
    }
});

gamesWithRatingApp.service('GamesService', function ($q, $http) {
    var url = 'http://plaprotest.azurewebsites.net/api/History/GamesWithRating';
    return {

        getData: function() {
            var deferred = $q.defer();
            $http.post(url, {
                method: 'POST',
                params: {
                    Limit: 5,
                    UserName: 'Dendi',
                    IncludeUnmarkedGames: false
                }
            })
                .then(function success(res) {
                    deferred.resolve(res.data);
                },function error(res) {
                    deferred.reject(res.status);
                });
            return deferred.promise;
        }

    }

})

gamesWithRatingApp.controller('GamesCtrl',function ($scope, GamesService) {
    var promiseObj = GamesService.getData();
    promiseObj.then(function(jsonData) {
        $scope.ratings=jsonData;
    });

});

gamesWithRatingApp.filter('dateFilter', function() {
    return function(text) {
        return moment(text).format("DD/MM/YYYY");
    }
})