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
import { forwardRef, useEffect, useState } from 'react';
import { ConviTabHeaderElementStyle, editStyle, nonEditStyle } from '../style/ConviTabStyle';
import { ConviTabCloseButton } from './ConviTabCloseButton';
var useTabTitles = function (title, onTabTitleChange, ableChangeTitle) {
    var _a = useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = useState(title), tabTitle = _b[0], setTabTitle = _b[1];
    useEffect(function () {
        setTabTitle(title);
    }, [title]);
    var handleDoubleClick = function () { return setEditMode(true); };
    var handleChange = function (e) { return setTabTitle(e.target.value); };
    return {
        titleContent: function () {
            return editMode && ableChangeTitle ? (_jsx("input", { css: editStyle, value: tabTitle, autoFocus: true, onChange: handleChange, onBlur: function (e) {
                    onTabTitleChange(e.target.value);
                    setEditMode(false);
                }, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        onTabTitleChange(e.currentTarget.value);
                        setEditMode(false);
                    }
                } })) : (_jsx("span", __assign({ css: nonEditStyle, onDoubleClick: handleDoubleClick }, { children: tabTitle })));
        },
    };
};
export var ConviTabHeaderElement = forwardRef(function (props, ref) {
    var children = props.children, onSelected = props.onSelected, index = props.index, selected = props.selected, onTabTitleChange = props.onTabTitleChange, fixed = props.fixed, onClose = props.onClose, ableChangeTitle = props.ableChangeTitle, draggableTab = props.draggableTab, icon = props.icon, onHeaderDrag = props.onHeaderDrag, onHeaderDragEnd = props.onHeaderDragEnd;
    var _a = useState(false), displayCloseButton = _a[0], setDisplayCloseButton = _a[1];
    var titleContent = useTabTitles(children, onTabTitleChange, ableChangeTitle).titleContent;
    var handleClick = function () { return onSelected(index); };
    var handleClose = function () { return onClose(); };
    var handleMouseOver = function () { return setDisplayCloseButton(true); };
    var handleMouseOut = function () { return setDisplayCloseButton(false); };
    return (_jsxs(ConviTabHeaderElementStyle, __assign({ ref: ref, draggable: draggableTab, selected: selected, onDrag: function (e) { return onHeaderDrag(e); }, onDragEnd: function (e) { return onHeaderDragEnd(e); }, onClick: handleClick, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut }, { children: [_jsx("span", __assign({ css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t\tmargin-top: auto;\n\t\t\t\t\tmargin-bottom: auto;\n\t\t\t\t"], ["\n\t\t\t\t\tmargin-top: auto;\n\t\t\t\t\tmargin-bottom: auto;\n\t\t\t\t"]))) }, { children: icon })), titleContent(), fixed || _jsx(ConviTabCloseButton, { displayCloseBtn: displayCloseButton, onClick: handleClose })] })));
});
ConviTabHeaderElement.defaultProps = {
    draggableTab: false,
    ableChangeTitle: false,
    fixed: false,
    icon: undefined,
};
var templateObject_1;
