angular.module('quote-tab').service('appService', ['theySaidSoService', function(theySaidSoService) {

	var _this = this;
	this.quotes = [];

	this.fetchOrGet = function() {
		/*return theySaidSoService.fetchQOD().then(function(data){
			return data;
		});*/
		console.log(theySaidSoService.fetchInspireQuote().then());
		theySaidSoService.fetchInspireQuote().then(function(inspireQuote){
			console.log(inspireQuote);
		});
	}

	this.getAll = function(callback) {
		callback(_this.quotes);
	}
}]);
