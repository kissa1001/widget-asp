angular.module("widget")
.service("APIservice",["$http",function($http){
	this.users = [];
	this.widgets = [];
	var thisSer = this;
	var url = "http://spa.tglrw.com:4000"

	this.getUsers = function(){
		return $http.get(url + "/users").success(function(data){
			angular.copy(data, thisSer.users);
		});
	};

	this.getUser = function(id){
		return $http.get(url + "/users/" + id)
		.then(function(res){
			return res.data;
		});
	};

	this.getWidgets = function(){
		return $http.get(url + "/widgets").success(function(data){
			angular.copy(data, thisSer.widgets);
		});
	};

	this.getWidget = function(id){
		return $http.get(url + "/widgets/" + id)
		.then(function(res){
			return res.data;
		});
	};

	this.createWidget = function(widget){
		return $http.post(url + '/widgets', widget).success(function(data){
			thisSer.widgets.push(data);
		});
	};

	this.editWidget = function(widget){
		return $http.put(url + '/widgets/' + widget.id, widget).success(function(data){
			return data;
		});
	};
}]);