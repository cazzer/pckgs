var _  = require('lodash');
var packages = require('node-persist');


module.exports = function(name, options) {

	packages.initSync(_.defaults({dir: name}, options));

	function add(path, npmPackage) {
		packages.setItem(path, npmPackage);
	}

	function get(path) {
		return packages.getItem(path);
	}

	function getPaths() {
		return packages.values();
	}

	return {
		add: add,
		get: get,
		getPaths: getPaths
	};
};
