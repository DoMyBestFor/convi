var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { ConviSplitPanelItemStyle } from '../style/ConviSplitPanelStyle';
export var ConviSplitPanelItem = forwardRef(function (props, ref) {
    var children = props.children, _a = props.dir, dir = _a === void 0 ? 'col' : _a, size = props.size, _b = props.maxSize, maxSize = _b === void 0 ? Infinity : _b, _c = props.minSize, minSize = _c === void 0 ? 0 : _c, initialSize = props.initialSize;
    var itemSize = size !== undefined ? size : initialSize;
    return (_jsx(ConviSplitPanelItemStyle, __assign({ ref: ref, dir: dir, size: itemSize, maxSize: maxSize, minSize: minSize }, { children: children })));
});
ConviSplitPanelItem.defaultProps = {
    dir: 'col',
    maxSize: Infinity,
    minSize: 0,
};
export default ConviSplitPanelItem;
