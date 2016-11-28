var app = angular.module('app', ['ngMaterial','duScroll','angular-scroll-animate','ngAnimate']);
app.controller('myCtrl', function($scope,$http) {


  $scope.animation = {};
  $scope.animation.current = 'fadeInUp';
  $scope.animation.previous = $scope.animation.current;
  $scope.ElementIn = function($el) {
      $el.removeClass('not-visible');
      $el.addClass('animated ' + $scope.animation.current);
    };

    $scope.animateElementOut = function($el) {
      $el.addClass('not-visible');
      $el.removeClass('animated ' + $scope.animation.current);

    };
});
app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('default')
 .primaryPalette('light-blue', {
  'default': '600', // by default use shade 400 from the pink palette for primary intentions
  'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
  'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
  'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
})
   .accentPalette('orange');
   // $ariaProvider.config({ tabindex: false });
});
