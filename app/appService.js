angular.module('quote-tab').service('appService', ['theySaidSoService', function(theySaidSoService) {

	var _this = this;
	this.quotes = [];

	this.fetchOrGet = function() {
		return {
			'getInspireQuote': theySaidSoService.fetchInspireQuote(),
			'getLifeQuote': theySaidSoService.fetchLifeQuote()
		}
	}

	this.getAll = function(callback) {
		callback(_this.quotes);
	}
}]);
