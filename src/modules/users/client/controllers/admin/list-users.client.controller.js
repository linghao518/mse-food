(function() {
    'use strict';

    angular
        .module('users.admin')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['$scope', '$filter', 'AdminService'];

    function UserListController($scope, $filter, AdminService) {
        var vm = this;

        vm.deleteUser = deleteUser;
        vm.users = AdminService.query();

        function deleteUser(user) {
            if (confirm("确认删除吗？")) {
                user.$remove(function() {
                    vm.users = AdminService.query();
                });
            }
        };
    }
}());
