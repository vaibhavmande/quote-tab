angular.module('quote-tab').service('appService', ['theySaidSoService', function(theySaidSoService) {

	var _this = this;
	this.quotes = [];

	this.fetch = function() {
		return {
			'getInspireQuote': theySaidSoService.fetchInspireQuote(),
			'getLifeQuote': theySaidSoService.fetchLifeQuote()
		}
	}

	this.getAll = function(callback) {
		callback(_this.quotes);
	}

	this.structureQuotesData = function(data) {
		return {
			i : { quote: data[0].quote, author: data[0].author },
			l : { quote: data[1].quote, author: data[1].author }
		}
	}
}]);
