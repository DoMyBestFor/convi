export const swapArrayElement = (array: Array<unknown>, idx1: number, idx2: number) => {
	let resArr;
	const copyArr = array.slice(0);

	if (idx1 < idx2) {
		resArr = copyArr.map((element: unknown, idx: number) => {
			if (idx < idx1) {
				return element;
			}
			if (idx1 <= idx && idx < idx2) {
				return array[idx + 1];
			}
			if (idx === idx2) {
				return array[idx1];
			}
			return element;
		});
	} else {
		resArr = copyArr.map((element: unknown, idx: number) => {
			if (idx < idx2) {
				return element;
			}
			if (idx2 === idx) {
				return array[idx1];
			}
			if (idx2 < idx && idx <= idx1) {
				return array[idx - 1];
			}
			return element;
		});
	}
	return resArr;
};
