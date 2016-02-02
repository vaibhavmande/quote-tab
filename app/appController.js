angular.module('quote-tab').controller('appController', ['$scope', 'appService', function($scope, appService) {

	$scope.quotes = [];
	$scope.isQuotesDataSet = false;

	if( false === $scope.isQuotesDataSet && $scope.quotes.length <= 0 ) {

		var quoteDataHandler = appService.fetchOrGet();
		quoteDataHandler.getInspireQuote.then(function(inspire_quote) {
			$scope.quotes.push(inspire_quote.data.contents.quotes[0]);
		});
		quoteDataHandler.getLifeQuote.then(function(life_quote) {
			$scope.quotes.push(life_quote.data.contents.quotes[0]);
		});
	}
}]);
