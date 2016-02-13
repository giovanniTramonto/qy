var app = angular.module('qyApp', []);

app.factory('qyData', function( $http ){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: './data/data.json',
        cache: true
      }).success(callback);
    }
  }
});

app.controller('qyCtrl', function ($scope, $sce, qyData) {
  qyData.list(function(qyData) {
    $scope.qyData = qyData;
    var killYtMask = '?rel=0&amp;fs=0&amp;showinfo=0&amp;';
    $scope.qyData.teaser.src = $sce.trustAsResourceUrl( qyData.teaser.src + killYtMask );
  });
});