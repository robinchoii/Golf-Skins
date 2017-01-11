var app = angular.module('myApp', [] );

app.controller('mainController',function($scope) {
  $scope.settings = {
    skin: 0,
    par: 0,
    birdie: 0,
    kp: 0,
    other: 0
  };
  $scope.player1 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0
  };
  $scope.player2 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0
  };
  $scope.player3 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0
  };
  $scope.player4 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0
  };

  $scope.generate = function() {
    var skinValue = $scope.settings.skin;
    var parValue = $scope.settings.par;
    var birdieValue = $scope.settings.birdie;
    var kpValue = $scope.settings.kp;
    var otherValue = $scope.settings.other;

    var player1Total = $scope.player1.skins * skinValue + $scope.player1.pars * parValue + $scope.player1.birdies * birdieValue + $scope.player1.kps * kpValue + $scope.player1.other * otherValue
    var player2Total = $scope.player2.skins * skinValue + $scope.player2.pars * parValue + $scope.player2.birdies * birdieValue + $scope.player2.kps * kpValue + $scope.player2.other * otherValue
    var player3Total = $scope.player3.skins * skinValue + $scope.player3.pars * parValue + $scope.player3.birdies * birdieValue + $scope.player3.kps * kpValue + $scope.player3.other * otherValue
    var player4Total = $scope.player4.skins * skinValue + $scope.player4.pars * parValue + $scope.player4.birdies * birdieValue + $scope.player4.kps * kpValue + $scope.player4.other * otherValue

    console.log(player1Total)
    console.log(player2Total)
    console.log(player3Total)
    console.log(player4Total)
    console.log($scope.player1)
  };
})
