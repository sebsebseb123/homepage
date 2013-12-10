'use strict';

angular.module('sebsebseb123comApp')
.controller('SongsCtrl', function ($scope, songService) {
  // Use our song service to get our list of songs.
  $scope.songs = songService.getSongs();
});
