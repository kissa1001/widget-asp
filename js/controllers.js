//Home Page Ctrl
angular.module('widget')
.controller('HomeCtrl', ['$scope','APIservice','$location',function($scope,APIservice,$location){
	$scope.users = APIservice.users;
	$scope.num_users = $scope.users.length;
	$scope.widgets = APIservice.widgets;
	$scope.num_widgets = $scope.widgets.length;
	$scope.userDetail = function(user) {
    	$location.path('/users/'+ user.id);
	};
	$scope.widgetDetail = function(widget) {
    	$location.path('/widgets/'+ widget.id);
	};
}]);

//Users Ctrl
angular.module('widget')
.controller('UsersCtrl', ['$scope','APIservice','$location',function($scope,APIservice,$location){
	$scope.users = APIservice.users;
	$scope.userDetail = function(user) {
    	$location.path('/users/'+ user.id);
	};
}]);

//User Ctrl
angular.module('widget')
.controller('UserCtrl', ['$scope','APIservice','$routeParams',function($scope,APIservice,$routeParams){
	APIservice.getUser($routeParams.id)
	.then(function(data){ 
		$scope.user = data;
	});
}]);

//Widgets Ctrl
angular.module('widget')
.controller('WidgetsCtrl', ['$scope','APIservice','$location',function($scope,APIservice,$location){
	$scope.widgets = APIservice.widgets;
	$scope.widgetDetail = function(widget) {
    	$location.path('/widgets/'+ widget.id);
	};
}]);

//Widget Ctrl
angular.module('widget')
.controller('WidgetCtrl', ['$scope','APIservice','$routeParams',function($scope,APIservice,$routeParams){
	APIservice.getWidget($routeParams.id)
	.then(function(data){ 
		$scope.widget = data;
	});
	$scope.editing = false;
	$scope.editWidget = function () {
		$scope.edited.id = $routeParams.id;
		APIservice.editWidget($scope.edited)
		.success(function(){
			APIservice.getWidget($scope.edited.id)
			.then(function(data){ 
				$scope.widget = data;
			});
			$scope.editing = false;
		})
	};
}]);
//Add Widget
angular.module('widget')
.controller('addWidgetCtrl', ['$scope','APIservice',function($scope,APIservice){
	$scope.addWidget = function(){
		if(!$scope.name || $scope.name === '') { return; }
		APIservice.createWidget({
			name: $scope.name,
			price: $scope.price, 
			color: $scope.color,
			melts: $scope.melts,
			inventory:$scope.inventory
		});
		$scope.name = '';
		$scope.price = '';
		$scope.color = '';
		$scope.melts = '';
		$scope.inventory= '';
		$scope.created = true;
	};
}]);
