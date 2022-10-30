import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { ConviTabArrowButton } from './ConviTabArrowButton';
export var ConviTabScrollButton = function (props) {
    var headerElement = props.headerElement, scrollLocation = props.scrollLocation;
    var move = headerElement ? headerElement.scrollWidth / headerElement.childElementCount : 20;
    return (_jsxs("div", { children: [_jsx("span", { children: _jsx(ConviTabArrowButton, { direction: "left", scrollLocation: scrollLocation, onClick: function () { return headerElement === null || headerElement === void 0 ? void 0 : headerElement.scrollBy(-move, 0); } }) }), _jsx("span", { children: _jsx(ConviTabArrowButton, { direction: "right", scrollLocation: -scrollLocation, onClick: function () { return headerElement === null || headerElement === void 0 ? void 0 : headerElement.scrollBy(move, 0); } }) })] }));
};
