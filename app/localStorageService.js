angular.module('quote-tab').service('localStorageService', function(){
	var _this = this;

	_this.setItem = function(key, value) {
		localStorage.setItem(key, value);
	}

	_this.getItem = function(key) {
		return localStorage.getItem(key);
	}
});
