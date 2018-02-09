gamesWithRatingApp.filter('dateFilter', function() {
    return function(text) {
        return moment(text).format("DD/MM/YYYY");
    }
});