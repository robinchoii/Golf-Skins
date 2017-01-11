var app = angular.module('myApp', [] );

app.controller('mainController',function($scope) {
  // $scope.player1 = $scope.player1;
  // $scope.player2 = $scope.player2;
  // $scope.player3 = $scope.player3;
  // $scope.player4 = $scope.player4;

  // $scope.player1 = {
  //   name: $scope.player1Name,
  //   skins: $scope.player1Skins,
  //   pars: $scope.player1Pars,
  //   birdies: $scope.player1Birdies,
  //   kps: $scope.player1KPs,
  //   other: $scope.player1Other
  // };
  // $scope.skins = skins

  $scope.player1 = {
    name: $scope.player1Name,
    skins: $scope.player1Skins,
    pars: $scope.player1Pars,
    birdies: $scope.player1Birdies,
    kps: $scope.player1KPs,
    other: $scope.player1Other
  },
  $scope.player2 = {
    name: $scope.player2Name,
    skins: $scope.player2Skins,
    pars: $scope.player2Pars,
    birdies: $scope.player2Birdies,
    kps: $scope.player2KPs,
    other: $scope.player2Other
  },
  $scope.player3 = {
    name: $scope.player3Name,
    skins: $scope.player3Skins,
    pars: $scope.player3Pars,
    birdies: $scope.player3Birdies,
    kps: $scope.player3KPs,
    other: $scope.player3Other
  },
  $scope.player4 = {
    name: $scope.player4Name,
    skins: $scope.player4Skins,
    pars: $scope.player4Pars,
    birdies: $scope.player4Birdies,
    kps: $scope.player4KPs,
    other: $scope.player4Other
  }
})
