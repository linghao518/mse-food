(function () {
  'use strict';

  // Foods controller
  angular
    .module('foods')
    .controller('FoodsController', FoodsController);

  FoodsController.$inject = ['$scope', '$state', '$timeout', 'Authentication', 'foodResolve'];

  function FoodsController ($scope, $state, $timeout, Authentication, food) {
    var vm = this;

    vm.authentication = Authentication;
    vm.food = food;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Food
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.food.$remove($state.go('foods.list'));
      }
    }

    // Save Food
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.foodForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.food._id) {
        vm.food.$update(successCallback, errorCallback);
      } else {
        vm.food.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $timeout(function() {
          $state.go('foods.list', {
            foodId: res._id
          });
        }, 1000);
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
