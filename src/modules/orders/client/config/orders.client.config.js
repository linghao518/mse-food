(function () {
  'use strict';

  angular
    .module('orders')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: '订单管理',
      state: 'orders.list',
      roles: ['admin']
    });
  }
})();
