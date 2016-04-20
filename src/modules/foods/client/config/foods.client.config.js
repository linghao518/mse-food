(function () {
  'use strict';

  angular
    .module('foods')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: '菜单管理',
      state: 'foodsAdmin.list',
      roles: ['admin']
    });
  }
})();
