(function () {
  'use strict';

  angular
    .module('foods')
    .directive('foodsUploader', foodsUploader);

  foodsUploader.$inject = [/*Example: '$state', '$window' */];

  function foodsUploader(/*Example: $state, $window */) {
    return {
      scope: {
          file: '='
      },
      link: function postLink(scope, element, attrs) {
        element.bind('change', function () {
            scope.$apply(function() {
              scope.file = element[0].files[0];
            });
        });
      }
    };
  }
})();
