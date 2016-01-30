angular.module('quote-tab', []).service('appService', [function() {
	var _this = this;
	this.data = [];

	this.fetch = function() {
		_this.data.push(['this is a test quote']);
	}

	this.getAll = function(callback) {
		callback(_this.data);
	}
}]);
