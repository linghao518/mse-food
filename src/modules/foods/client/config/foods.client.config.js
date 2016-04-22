(function () {
  'use strict';

  angular
    .module('foods')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: '菜肴管理',
      state: 'foodsAdmin.list',
      roles: ['admin']
    });
  }
})();
