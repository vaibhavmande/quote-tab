angular.module('quote-tab').service('theySaidSoService', function($http) {

	var _this = this;

	this.endPoint = "http://localhost.rest/qod.json?category=";
	this.categories = ['inspire','life'];

	this.fetchInspireQuote = function() {
		return $http.get(_this.endPoint+_this.categories[0]).then(function(result){
			return result.data;
		});
	};

	this.fetchLifeQuote = function() {
		return $http.get(_this.endPoint+_this.categories[1]).then(function(result){
			return result.data;
		});
	};
});
