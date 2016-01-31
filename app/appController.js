angular.module('quote-tab').controller('appController', ['$scope', 'appService', function($scope, appService) {

	$scope.appService = appService;

	$scope.appService.fetch();
	$scope.appService.getAll(function(data) {
		$scope.quotes = data;
	});
}]);
