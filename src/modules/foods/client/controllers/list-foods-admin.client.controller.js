(function() {
    'use strict';

    angular
        .module('foods')
        .controller('FoodsListAdminController', FoodsListAdminController);

    FoodsListAdminController.$inject = ['FoodsService', 'OrdersService'];

    function FoodsListAdminController(FoodsService) {
        var vm = this;

        vm.foods = FoodsService.query();
        vm.deleteFood = deleteFood;

        function deleteFood(food) {
            if(confirm("确认删除吗？")) {
                food.$remove(function() {
                    vm.foods = FoodsService.query();
                });
            }
        }
    }
})();
