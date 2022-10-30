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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { ConviModalCloseButton } from './ConviModalCloseButton';
import { ConviModalStyle, ConviModalTitle } from '../style/ConviModalStyle';
export var ConviModal = function (props) {
    var open = props.open, onClose = props.onClose, title = props.title, children = props.children, preventBackdropClick = props.preventBackdropClick, _a = props.width, width = _a === void 0 ? 'auto' : _a, _b = props.height, height = _b === void 0 ? 'auto' : _b;
    return (_jsxs(ConviModalStyle, __assign({ open: open, width: width, height: height }, { children: [_jsx("div", { role: "document", onMouseDown: function () { return !preventBackdropClick && onClose(); } }), _jsxs("div", { children: [_jsxs("div", __assign({ css: ConviModalTitle }, { children: [title, _jsx(ConviModalCloseButton, { onClick: function () { return onClose(); } })] })), children] })] })));
};
ConviModal.defaultProps = {
    preventBackdropClick: false,
    width: 'auto',
    height: 'auto',
};
export default ConviModal;
