var gamesWithRatingApp = angular.module('gamesWithRatingApp',['angularMoment']);
gamesWithRatingApp.directive('gamesData', function () {
    return {
        restrict: 'E',
        controller: 'GamesCtrl',
        templateUrl: 'games-data.html'
    }
});


gamesWithRatingApp.controller('GamesCtrl',function ($scope, $http) {
    var url = 'http://plaprotest.azurewebsites.net/api/History/GamesWithRating'; // ссылка на ресурс получения коэффициентов

    $http.post(url, {
        method: 'POST',
        params: {
            Limit: 5,
            UserName: 'Dendi',
            IncludeUnmarkedGames: false
        }
    })
        .then(function(json) {
            $scope.ratings = json.data;
            for(let i=0; i<$scope.ratings.length;i++) {
                $scope.ratings[i].CreationTimeFormat = moment($scope.ratings[i].CreationTime).format("DD/MM/YYYY")
                $scope.ratings[i].EndTimeFormat = moment($scope.ratings[i].EndTime).format("DD/MM/YYYY")
            }

        }, (err) => {
        alert("Error");
});
});
