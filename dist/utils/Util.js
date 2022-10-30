export var swapArrayElement = function (array, idx1, idx2) {
    var resArr;
    var copyArr = array.slice(0);
    if (idx1 < idx2) {
        resArr = copyArr.map(function (element, idx) {
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
    }
    else {
        resArr = copyArr.map(function (element, idx) {
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
export var getPadding = function (open) {
    var paddingLeft = 0;
    var paddingRight = 0;
    if (open) {
        paddingLeft += 20;
        paddingRight += 20;
    }
    return "0 ".concat(paddingRight, "px 0 ").concat(paddingLeft, "px");
};
export var debounce = function (func, waitFor) {
    var timeout = null;
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(function () { return func.apply(void 0, args); }, waitFor);
    };
    return debounced;
};
