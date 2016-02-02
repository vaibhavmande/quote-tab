angular.module('quote-tab').service('theySaidSoService', function($http) {

	var _this = this;

	//this.endPoint = "http://quotes.rest/qod.json?category=";
	this.endPoint = "http://localhost/test-data/json.php?category=";
	this.categories = ['inspire','life'];

	this.fetchInspireQuote = function() {
		return $http.get(_this.endPoint+_this.categories[0]);
	};

	this.fetchLifeQuote = function() {
		return $http.get(_this.endPoint+_this.categories[1]);
	};
});
