(function () {
  'use strict';

  angular
    .module('users.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  // Configuring the Users module
  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: '用户管理',
      state: 'admin.users',
      roles: ['admin']
    });
  }
}());
