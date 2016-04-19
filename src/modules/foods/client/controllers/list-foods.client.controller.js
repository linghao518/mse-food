(function() {
    'use strict';

    angular
        .module('foods')
        .controller('FoodsListController', FoodsListController);

    FoodsListController.$inject = ['FoodsService'];

    function FoodsListController(FoodsService) {
        var vm = this;

        vm.foods = FoodsService.query();
        vm.openedFood = {};
        vm.open = open;

        function open(_id) {
            vm.openedFood = _.findWhere(vm.foods, {_id: _id});
            console.log(vm.openedFood);
        };
    }
})();
