angular.module('quote-tab').controller('appController', ['$scope', 'appService', function($scope, appService) {

	$scope.quotes = [];
	$scope.isQuotesDataSet = false;

	if( false === $scope.isQuotesDataSet && $scope.quotes.length <= 0 ) {
		var data = appService.fetchOrGet().then(function(data){
			$scope.quotes = data;
		});
	}

}]);
