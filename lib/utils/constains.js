"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var contains = function contains(array, value) {
	var index = -1;
	var length = array.length;
	while (++index < length) {
		if (array[index] === value) {
			return true;
		}
	}
	return false;
};

exports.default = contains;