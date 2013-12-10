'use strict';

angular.module('sebsebseb123comApp', [
  'ngRoute',
  'config'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/songs', {
      templateUrl: 'views/songs.html',
      controller: 'SongsCtrl'
    })
    .when('/songs/:nodeId', {
      templateUrl: 'views/song.html',
      controller: 'SongCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.factory('songService', ['$http', 'API_ENDPOINT', function($http, API_ENDPOINT) {
  return {
    // Define our function then get the data.
    getSongs: function() {
      return $http.jsonp(API_ENDPOINT + 'songs')
        .then(function(result) {
          return result.data;
        });
    }
  };
}]);
