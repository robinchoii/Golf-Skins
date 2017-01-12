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
    other: 0,
    calculate: function() {
      return $scope.player1.skins * $scope.settings.skin + $scope.player1.pars * $scope.settings.par + $scope.player1.birdies * $scope.settings.birdie + $scope.player1.kps * $scope.settings.kp + $scope.player1.other * $scope.settings.other
    }
  };
  $scope.player2 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0,
    calculate: function() {
      return $scope.player2.skins * $scope.settings.skin + $scope.player2.pars * $scope.settings.par + $scope.player2.birdies * $scope.settings.birdie + $scope.player2.kps * $scope.settings.kp + $scope.player2.other * $scope.settings.other
    }
  };
  $scope.player3 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0,
    calculate: function() {
      return $scope.player3.skins * $scope.settings.skin + $scope.player3.pars * $scope.settings.par + $scope.player3.birdies * $scope.settings.birdie + $scope.player3.kps * $scope.settings.kp + $scope.player3.other * $scope.settings.other
    }
  };
  $scope.player4 = {
    name: '',
    skins: 0,
    pars: 0,
    birdies: 0,
    kps: 0,
    other: 0,
    calculate: function() {
      return $scope.player4.skins * $scope.settings.skin + $scope.player4.pars * $scope.settings.par + $scope.player4.birdies * $scope.settings.birdie + $scope.player4.kps * $scope.settings.kp + $scope.player4.other * $scope.settings.other
    }
  };
  $scope.calculate = function(skins,par,birdies,kps,other) {
    var total= $scope.player1.skins * $scope.settings.skin + $scope.player1.pars * $scope.settings.par + $scope.player1.birdies * $scope.settings.birdie + $scope.player1.kps * $scope.settings.kp + $scope.player1.other * $scope.settings.other
    return total
  };
  $scope.clear = function() {
    $('#golfInfo').find('input').val(0)
    $('#golfInfo').find('input:text').val('')
    $('.pay').text('')
  };
  $scope.twoPlayers = false;
  $scope.threePlayers = true;
  $scope.fourPlayers = true;

  $scope.changeTo2Players = function() {
    $scope.twoPlayers = false;
    $scope.threePlayers = true;
    $scope.fourPlayers = true;
  };
  $scope.changeTo3Players = function() {
    $scope.threePlayers = false
    $scope.twoPlayers = true;
    $scope.fourPlayers = true;
  };
  $scope.changeTo4Players = function() {
    $scope.fourPlayers = false
    $scope.twoPlayers = true;
    $scope.threePlayers = true;
  }
})
