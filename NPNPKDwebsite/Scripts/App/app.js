'use strict';
var mainApp;
(function (ng) {
    mainApp = ng.module('main', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider

                /////////////-------------Hardoi-----------/////////////

                .when('/Dashboard', {
                    templateUrl: 'pages/Dashboard.html',
                    controller: 'DashboardController',
                    caseInsensitiveMatch: true
                })
                .when('/AuditReport', {
                    templateUrl: 'pages/AuditReport.html',
                    caseInsensitiveMatch: true
                })
                .when('/Balancesheet', {
                    templateUrl: 'pages/Balancesheet.html',
                    caseInsensitiveMatch: true
                })              
                .when('/Budget', {
                    templateUrl: 'pages/Budget.html',
                    caseInsensitiveMatch: true
                })
                .when('/contactus', {
                    templateUrl: 'contact-us/index.html',
                    caseInsensitiveMatch: true
                })
                .when('/Drainage', {
                    templateUrl: 'pages/Drainage.html',
                    caseInsensitiveMatch: true
                })
                .when('/Emagazine', {
                    templateUrl: 'pages/Emagazine.html',
                    caseInsensitiveMatch: true
                })
                .when('/electedwing', {
                    templateUrl: 'elected-wing/index.html',
                    caseInsensitiveMatch: true
                })
                .when('/Gallery', {
                    templateUrl: 'gallery/index.html',
                    caseInsensitiveMatch: true
                })
                .when('/HealthDep', {
                    templateUrl: 'pages/HealthDep.html',
                    caseInsensitiveMatch: true
                })
                .when('/Help', {
                    templateUrl: 'pages/Help.html',
                    caseInsensitiveMatch: true
                })
                .when('/Member', {
                    templateUrl: 'pages/Member.html',
                    caseInsensitiveMatch: true
                })
                .when('/Objective', {
                    templateUrl: 'pages/Objective.html',
                    caseInsensitiveMatch: true
                })
                .when('/Overview', {
                    templateUrl: 'pages/Overview.html',
                    caseInsensitiveMatch: true
                })
                .when('/PWDDep', {
                    templateUrl: 'pages/PWDDep.html',
                    caseInsensitiveMatch: true
                })
                .when('/SlDep', {
                    templateUrl: 'pages/SlDep.html',
                    caseInsensitiveMatch: true
                })
                .when('/Structure', {
                    templateUrl: 'pages/Structure.html',
                    caseInsensitiveMatch: true
                })
                .when('/TaxDep', {
                    templateUrl: 'pages/TaxDep.html',
                    caseInsensitiveMatch: true
                })
                .when('/TownDevDevision', {
                    templateUrl: 'pages/TownDevDevision.html',
                    caseInsensitiveMatch: true
                })
                .when('/TownPlanningDep', {
                    templateUrl: 'pages/TownPlanningDep.html',
                    caseInsensitiveMatch: true
                })
                .when('/UnderConstruction', {
                    templateUrl: 'pages/UnderConstruction.html',
                    caseInsensitiveMatch: true
                })
                .when('/Vision', {
                    templateUrl: 'pages/Vision.html',
                    caseInsensitiveMatch: true
                })
                .when('/Ward', {
                    templateUrl: 'pages/Ward.html',
                    caseInsensitiveMatch: true
                })


                .otherwise('/Dashboard');

        }])
        .controller('mainController', ['$scope', '$route', '$rootScope', 'service', function ($scope, $route, $rootScope, service) {
            $scope.$on('$routeChangeSuccess', function (current, previous) {

                var a = 0;

            });
        }]);


})(angular);