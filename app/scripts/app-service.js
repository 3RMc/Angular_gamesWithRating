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

});