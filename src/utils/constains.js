const contains = function (array, value) {
	let index = -1;
	const length = array.length;
	while (++index < length) {
		if (array[index] === value) {
			return true;
		}
	}
	return false;
};

export default contains;
