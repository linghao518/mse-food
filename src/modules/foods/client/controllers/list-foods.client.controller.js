(function() {
    'use strict';

    angular
        .module('foods')
        .controller('FoodsListController', FoodsListController);

    FoodsListController.$inject = ['FoodsService'];

    function FoodsListController(FoodsService) {
        var vm = this;

        vm.foods = FoodsService.query();
        vm.openedFood = null;
        vm.opened = false;
        vm.open = open;
        vm.close = close;

        function open(_id) {
            vm.opened = true;
            vm.openedFood = _.findWhere(vm.foods, {_id: _id});
        };

        function close() {
            vm.opened = false;
        };
    }
})();
