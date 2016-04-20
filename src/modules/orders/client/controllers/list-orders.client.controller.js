(function() {
    'use strict';

    angular
        .module('orders')
        .controller('OrdersListController', OrdersListController);

    OrdersListController.$inject = ['OrdersService'];

    function OrdersListController(OrdersService) {
        var vm = this;

        vm.deleteOrder = deleteOrder;
        vm.updateOrder = updateOrder;
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
        ];

        function deleteOrder(order) {
            if(confirm("确认删除吗？")) {
                order.$remove(function() {
                    vm.orders = OrdersService.query();
                });
            }
        };

        function updateOrder(order) {
            order.$update();
        };
    }
})();
