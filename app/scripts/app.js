'use strict';

angular.module('sebsebseb123comApp', [
  'ngRoute'
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
  });
