angular.module('widget', ['ngRoute']);
angular.module('widget')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'templates/dashboard.html',
		controller : 'HomeCtrl',
		controllerAs: 'vm',
		resolve: {
			userPromise : function(APIservice){
				return APIservice.getUsers();
			},
			widgetPromise : function(APIservice){
				return APIservice.getWidgets();
			}
		}
	})
	.when('/users', {
		templateUrl : 'templates/users.html',
		controller : 'UsersCtrl',
		controllerAs: 'vm',
		resolve: {
			userPromise : function(APIservice){
				return APIservice.getUsers();
			}
		}
	})
	.when('/users/:id', {
		templateUrl : 'templates/user.html',
		controller : 'UserCtrl',
		controllerAs: 'vm'
	})
	.when('/widgets', {
		templateUrl : 'templates/widgets.html',
		controller : 'WidgetsCtrl',
		controllerAs: 'vm',
		resolve: {
			widgetPromise : function(APIservice){
				return APIservice.getWidgets();
			}
		}
	})
	.when('/widgets/:id', {
		templateUrl : 'templates/widget.html',
		controller : 'WidgetCtrl',
		controllerAs: 'vm'
	})
	.when('/create', {
		templateUrl:'templates/create-widget.html',
		controller: 'addWidgetCtrl'
	});
}])
