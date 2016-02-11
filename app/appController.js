angular.module('quote-tab').controller('appController', ['$scope', 'appService', '$q', 'localStorageService', function($scope, appService, $q, localStorageService) {

	$scope.quotes = null;
	$scope.showLoader = true;
	$scope.quoteIndexes = ['i', 'l'];
	$scope.quoteIndexToShow = $scope.quoteIndexes[0];

	var _this = this;

	this.isQuotesDataSet = function() {
		return ( typeof localStorageService.getItem('quotes') === 'string' ) ? true : false;
	}

	this.fetchOrGetFromApi = function() {

		return new Promise(function(resolve, reject){

			if( false === _this.isQuotesDataSet() ) {

				var quoteDataHandler = appService.fetch();

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
		$scope.quoteIndexToShow = $scope.quoteIndexes[Math.floor(Math.random() * 2)];
	    $scope.$apply(function(){
	        $scope.showLoader = false;
	    });
	}

	var quotesDataPromise = this.fetchOrGetFromApi();

	quotesDataPromise.then(function(quotes){
		if(typeof quotes == 'object') {
			localStorageService.setItem('quotes', JSON.stringify(quotes));
			$scope.quotes = quotes;
			_this.bootstrap();
		}
	}, function(error){
		Error(error);
	});
}]);
