angular.module('quote-tab').controller('appController', ['$scope', 'appService', '$q', 'localStorageService', function($scope, appService, $q, localStorageService) {

	$scope.quotes = [];
	var _this = this;

	this.isQuotesDataSet = function() {
		return ( typeof $scope.quotes == "object" ) ? true : false;
	}

	this.fetchOrGetFromApi = function() {

		return new Promise(function(resolve, reject){

			if( false === _this.isQuotesDataSet() ) {
				var quoteDataHandler = appService.fetchOrGet();

				$q.all([quoteDataHandler.getInspireQuote, quoteDataHandler.getLifeQuote]).then(function(quoteObjects) {
					resolve(appService.structureQuotesData([quoteObjects[0].data.contents.quotes[0], quoteObjects[1].data.contents.quotes[0]]));
				}, function () {
					reject(Error("Could no fetch"));
				});
			} else {
				resolve(JSON.parse(localStorageService.getItem('quotes')));
			}
		});
	}

	this.bootstrap = function() {
		//fire UI
		window.$scope = $scope;
	}

	var quotesDataPromise = this.fetchOrGetFromApi();

	quotesDataPromise.then(function(quotes){
		if(typeof quotes == 'object') {
			$scope.quotes = quotes;
			localStorageService.setItem('quotes', JSON.stringify(quotes));
			_this.bootstrap();
		}
	}, function(error){
		Error(error);
	});


}]);
