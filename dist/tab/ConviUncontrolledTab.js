var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { css } from '@emotion/react';
import { useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabStyle } from '../style/ConviTabStyle';
export var ConviUncontrolledTab = function (props) {
    var defaultIndex = props.defaultIndex, forceRender = props.forceRender, children = props.children;
    var _a = useState(defaultIndex), selected = _a[0], setSelected = _a[1];
    var tabElements = Array.isArray(children) ? children : [children];
    return (_jsxs(ConviTabStyle, { children: [_jsx("div", __assign({ className: "header" }, { children: _jsx("div", __assign({ className: "tabList" }, { children: tabElements.map(function (child, tabIndex) { return (_jsx(ConviTabHeaderElement, __assign({ index: tabIndex, selected: selected === tabIndex, icon: child.props.frontIcon, onTabTitleChange: function () { return null; }, fixed: child.props.fixed || defaultIndex !== undefined, onSelected: function (index) { return setSelected(index); }, onClose: function () { return null; }, onHeaderDrag: function (e) { return console.log(e); }, onHeaderDragEnd: function (e) { return console.log(e); } }, { children: child.props.title }), "".concat(child.props.title, "-").concat(tabIndex * 1))); }) })) })), !forceRender
                ? tabElements.map(function (child, index) { return (_jsx("span", __assign({ css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t\t\t\t\tdisplay: ", ";\n\t\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t\tdisplay: ", ";\n\t\t\t\t\t\t\t"])), selected === index ? 'inline' : 'none') }, { children: child }), "".concat(child.props.title, "-").concat(index * 1))); })
                : tabElements[selected]] }));
};
ConviUncontrolledTab.defaultProps = {
    forceRender: false,
};
export default ConviUncontrolledTab;
var templateObject_1;
