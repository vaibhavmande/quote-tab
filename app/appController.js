angular.module('quote-tab').controller('appController', ['$scope', 'appService', '$q', 'localStorageService', function($scope, appService, $q, localStorageService) {

	$scope.quotes = [];
	var _this = this;

	if( false === this.isQuotesDataSet() && $scope.quotes.length <= 0 ) {

		var quoteDataHandler = appService.fetchOrGet();

		quoteDataHandler.getInspireQuote.then(function(inspire_quote) {
			$scope.quotes.push(inspire_quote.data.contents.quotes[0]);
		});
		quoteDataHandler.getLifeQuote.then(function(life_quote) {
			$scope.quotes.push(life_quote.data.contents.quotes[0]);
		});

		$q.all([quoteDataHandler.getInspireQuote, quoteDataHandler.getLifeQuote]).then(function(quoteObjects) {
			$scope.inspireQuote = quoteObjects[0].data.contents.quotes[0];
			$scope.lifeQuote = quoteObjects[1].data.contents.quotes[0];

			//Set this data to localStorage
			localStorageService.setItem('quotes', JSON.stringify([$scope.inspireQuote, $scope.lifeQuote]));
		}, function () { /* either of the promise failed */ });
	}

	this.isQuotesDataSet = function() {
		return false;
	}
}]);
