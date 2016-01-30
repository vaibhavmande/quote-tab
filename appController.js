angular.module('quote-tab').controller('appController', ['$scope', 'appService', function($scope, appService) {
	$scope.appService = appService;

	$scope.appService.getAll(function(data) {
		$scope.quotes = data;
		$scope.$apply();
		console.log($scope.quotes);
	});

	console.log($scope.quotes);
}]);
