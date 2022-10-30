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
import { useEffect, useRef, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement } from './ConviTabElement';
import { getPadding, swapArrayElement } from '../utils/Util';
import { ConviTabPlusButton } from './ConviTabPlusButton';
import { ConviTabStyle } from '../style/ConviTabStyle';
import { ConviTabScrollButton } from './ConviTabScrollButton';
export var ConviTab = function (props) {
    var selected = props.selected, ableChangeTitle = props.ableChangeTitle, forceRender = props.forceRender, draggableTab = props.draggableTab, children = props.children, onClose = props.onClose, onTabPositionChange = props.onTabPositionChange, onSelected = props.onSelected, onAdd = props.onAdd;
    var headerRef = useRef(null);
    var refs = useRef([]);
    var positions = useRef([]);
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var _b = useState(0), scrollLocation = _b[0], setScrollLocation = _b[1];
    useEffect(function () {
        positions.current = children.map(function (_, childIndex) {
            var el = refs.current.find(function (__, index) { return index === childIndex; });
            var rec = el && el.getBoundingClientRect();
            return {
                index: childIndex,
                rec: rec,
            };
        });
        if (headerRef.current) {
            if (headerRef.current.clientWidth < headerRef.current.scrollWidth) {
                setOpen(true);
                headerRef.current.style.padding = getPadding(true);
            }
            else {
                setOpen(false);
                headerRef.current.style.padding = getPadding(false);
            }
        }
    }, [children, selected, open]);
    var handleDrag = function (index, e) {
        var delta = e.pageX || e.clientX;
        positions.current.forEach(function (pos) {
            var prevMoved = pos.moved || 0;
            var swap = index !== pos.index && pos.rec.left + prevMoved < delta && delta < pos.rec.right + prevMoved;
            if (swap) {
                var idx1 = index;
                var idx2 = pos.index;
                var minus = idx1 > idx2 ? 1 : -1;
                var movePx = minus * (pos.rec.right - pos.rec.left) - prevMoved;
                refs.current[pos.index].style.transform = "translate(".concat(movePx, "px, 0px)");
                positions.current[idx2].moved = movePx;
            }
        });
    };
    var handleDragEnd = function (index, e) {
        var delta = e.pageX || e.clientX;
        var swapedTabs = null;
        positions.current.forEach(function (pos) {
            var swap = index !== pos.index && pos.rec.left < delta && delta < pos.rec.right;
            if (swap)
                swapedTabs = swapArrayElement(children, index, pos.index);
            refs.current[pos.index].style.transform = "translate(0px, 0px)";
        });
        var newTabs = swapedTabs || children;
        if (swapedTabs) {
            onSelected(index);
            onTabPositionChange(newTabs);
        }
    };
    var handleTabTitleChange = function (newTitle, currentIndex, currentTabs) {
        var newTabs = currentTabs.map(function (tab, index) {
            return currentIndex === index ? (_jsx(ConviTabElement, __assign({ title: newTitle, fixed: tab.props.fixed }, { children: tab.props.children }))) : (tab);
        });
        onTabPositionChange(newTabs);
    };
    var renderScrollButton = function (showScrollButton) {
        return showScrollButton && _jsx(ConviTabScrollButton, { headerElement: headerRef.current, scrollLocation: scrollLocation });
    };
    var renderAddButton = function (showAddButton) {
        return showAddButton && (_jsx("span", { children: _jsx(ConviTabPlusButton, { onClick: function () {
                    onAdd();
                    onSelected(children.length);
                } }) }));
    };
    return (_jsxs(ConviTabStyle, { children: [_jsxs("div", __assign({ className: "header" }, { children: [_jsxs("div", __assign({ className: "tabList", ref: headerRef, onScroll: function (e) { return setScrollLocation(e.currentTarget.scrollLeft); } }, { children: [renderScrollButton(open), children.map(function (child, tabIndex) { return (_jsx(ConviTabHeaderElement, __assign({ ref: function (el) {
                                    refs.current[tabIndex] = el;
                                }, index: tabIndex, selected: selected === tabIndex, fixed: child.props.fixed, icon: child.props.frontIcon, ableChangeTitle: ableChangeTitle, draggableTab: draggableTab, onTabTitleChange: function (newTitle) { return handleTabTitleChange(newTitle, tabIndex, children); }, onHeaderDrag: function (e) { return handleDrag(tabIndex, e); }, onHeaderDragEnd: function (e) { return handleDragEnd(tabIndex, e); }, onSelected: function (index) { return onSelected(index); }, onClose: function () {
                                    onSelected(selected - 1 || selected + 1);
                                    onClose(tabIndex);
                                } }, { children: child.props.title }), "".concat(child.props.title, "-").concat(tabIndex * 1))); })] })), renderAddButton(onAdd !== undefined)] })), !forceRender
                ? children.map(function (child, index) { return (_jsx("span", __assign({ css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t\t\t\t\tdisplay: ", ";\n\t\t\t\t\t\t\t"], ["\n\t\t\t\t\t\t\t\tdisplay: ", ";\n\t\t\t\t\t\t\t"])), selected === index ? 'inline' : 'none') }, { children: child }), "".concat(child.props.title, "-").concat(index * 1))); })
                : children[selected]] }));
};
ConviTab.defaultProps = {
    ableChangeTitle: false,
    forceRender: false,
    draggableTab: true,
    onAdd: undefined,
};
export default ConviTab;
var templateObject_1;
