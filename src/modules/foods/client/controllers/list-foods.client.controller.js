(function() {
    'use strict';

    angular
        .module('foods')
        .controller('FoodsListController', FoodsListController);

    FoodsListController.$inject = ['FoodsService', 'OrdersService'];

    function FoodsListController(FoodsService, OrdersService) {
        var vm = this;

        vm.foods = FoodsService.query();
        vm.openedFood = null;
        vm.opened = false;
        vm.openedOrder = false;
        vm.open = open;
        vm.openOrder = openOrder;
        vm.close = close;
        vm.saveOrder = saveOrder;
        vm.order = new OrdersService();
        vm.ordered = false;

        function open(_id) {
            vm.opened = true;
            vm.openedFood = _.findWhere(vm.foods, { _id: _id });
        };

        function openOrder() {
            vm.openedOrder = true;
            vm.order.quantity = 1;
            vm.order.food = vm.openedFood._id;
        }

        function close() {
            reset();
        };

        function saveOrder(isValid) {
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'vm.form.orderForm');
                return false;
            }

            vm.order.$save(successCallback, errorCallback);

            function successCallback(res) {
                vm.ordered = true;
            }

            function errorCallback(res) {
                vm.error = res.data.message;
            }
        };

        function reset() {
            vm.openedOrder = false;
            vm.opened = false;
            vm.ordered = false;
            vm.order = new OrdersService();
        }
    }
})();
