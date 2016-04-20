(function() {
    'use strict';

    angular
        .module('orders')
        .controller('OrdersListController', OrdersListController);

    OrdersListController.$inject = ['OrdersService'];

    function OrdersListController(OrdersService) {
        var vm = this;

        vm.orders = OrdersService.query();
        vm.statusList = [
            {
                value: '订单处理中'
            }, {
                value: '烹饪中'
            }, {
                value: '送单中'
            }, {
                value: '订单完成'
            }
        ]
    }
})();
