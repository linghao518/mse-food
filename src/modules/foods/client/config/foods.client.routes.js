(function() {
    'use strict';

    angular
        .module('foods')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('foods', {
                abstract: true,
                url: '/',
                template: '<ui-view/>'
            })
            .state('foods.list', {
                url: '',
                templateUrl: 'modules/foods/client/views/list-foods.client.view.html',
                controller: 'FoodsListController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Foods List'
                }
            })
            .state('foods.create', {
                url: '/create',
                templateUrl: 'modules/foods/client/views/form-food.client.view.html',
                controller: 'FoodsController',
                controllerAs: 'vm',
                resolve: {
                    foodResolve: newFood
                },
                data: {
                    roles: ['user', 'admin'],
                    pageTitle: 'Foods Create'
                }
            })
            .state('foods.edit', {
                url: '/:foodId/edit',
                templateUrl: 'modules/foods/client/views/form-food.client.view.html',
                controller: 'FoodsController',
                controllerAs: 'vm',
                resolve: {
                    foodResolve: getFood
                },
                data: {
                    roles: ['user', 'admin'],
                    pageTitle: 'Edit Food {{ foodResolve.name }}'
                }
            })
            .state('foods.view', {
                url: '/:foodId',
                templateUrl: 'modules/foods/client/views/view-food.client.view.html',
                controller: 'FoodsController',
                controllerAs: 'vm',
                resolve: {
                    foodResolve: getFood
                },
                data: {
                    pageTitle: 'Food {{ articleResolve.name }}'
                }
            });


        $stateProvider
            .state('foodsAdmin', {
                abstract: true,
                url: '/admin/foods',
                template: '<ui-view/>'
            })
            .state('foodsAdmin.list', {
                url: '',
                templateUrl: 'modules/foods/client/views/list-foods-admin.client.view.html',
                controller: 'FoodsListController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Foods List'
                }
            });
    }

    getFood.$inject = ['$stateParams', 'FoodsService'];

    function getFood($stateParams, FoodsService) {
        return FoodsService.get({
            foodId: $stateParams.foodId
        }).$promise;
    }

    newFood.$inject = ['FoodsService'];

    function newFood(FoodsService) {
        return new FoodsService();
    }
})();
