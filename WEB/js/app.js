/**
 * Created by Victor77 on 22.05.2014.
 */
angular.module('Template',['ngCookies','ngResource','ngLocale', 'ngRoute','ngSanitize','ngAnimate',
    'mgcrea.ngStrap'
]).config(['$routeProvider',  function($routeProvider) { $routeProvider.

    when('/title',          {templateUrl: 'partials/title.html', controller: TitleCtrl}).

    otherwise({redirectTo: '/title'});
}]);