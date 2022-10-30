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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { ConviSplitPanelItem } from './ConviSplitPanelItem';
import { ConviSplitPanelResizerStyle, ConviSplitPanelStyle } from '../style/ConviSplitPanelStyle';
export var ConviSplitPanel = function (props) {
    var children = props.children, _a = props.dir, dir = _a === void 0 ? 'col' : _a, _b = props.resizerThickness, resizerThickness = _b === void 0 ? 2 : _b, divProps = __rest(props, ["children", "dir", "resizerThickness"]);
    var _c = useState([]), sizes = _c[0], setSizes = _c[1];
    var itemRefs = useRef([]);
    var paneRefs = useRef([]);
    var startPos = useRef(0);
    var resizerIndex = useRef(1);
    var minSizes = useRef([]);
    var maxSizes = useRef([]);
    var getMinSizes = function () { return children.map(function (child) { return child.props.minSize; }); };
    var getMaxSizes = function () { return children.map(function (child) { return child.props.maxSize; }); };
    useEffect(function () {
        paneRefs.current = itemRefs.current.map(function (item) { return item.getBoundingClientRect(); });
        setSizes(paneRefs.current.map(function (pane) { return (dir === 'col' ? pane.height : pane.width); }));
        minSizes.current = getMinSizes();
        maxSizes.current = getMaxSizes();
    }, [dir]);
    var handleMouseMove = function (m) {
        m.preventDefault();
        var first = paneRefs.current[resizerIndex.current - 1];
        var second = paneRefs.current[resizerIndex.current];
        var copySizes = sizes.slice();
        var maxSize = dir === 'col' ? first.height + second.height - resizerThickness : first.width + second.width - resizerThickness;
        var firstMinSize = minSizes.current[resizerIndex.current - 1];
        var secondMinSize = minSizes.current[resizerIndex.current];
        var firstMaxSize = Math.min(maxSizes.current[resizerIndex.current - 1], maxSize);
        var secondMaxSize = Math.min(maxSizes.current[resizerIndex.current], maxSize);
        var move = dir === 'col' ? m.clientY - startPos.current : m.clientX - startPos.current;
        copySizes[resizerIndex.current - 1] += move;
        copySizes[resizerIndex.current] -= move;
        var isFirstReachedThreshold = false;
        var isSecondReachedThreshold = false;
        if (copySizes[resizerIndex.current - 1] > firstMaxSize) {
            copySizes[resizerIndex.current - 1] = firstMaxSize;
            isFirstReachedThreshold = true;
        }
        else if (copySizes[resizerIndex.current - 1] < firstMinSize) {
            copySizes[resizerIndex.current - 1] = firstMinSize;
            isFirstReachedThreshold = true;
        }
        if (copySizes[resizerIndex.current] > secondMaxSize) {
            copySizes[resizerIndex.current] = secondMaxSize;
            isSecondReachedThreshold = true;
        }
        else if (copySizes[resizerIndex.current] < secondMinSize) {
            copySizes[resizerIndex.current] = secondMinSize;
            isSecondReachedThreshold = true;
        }
        if (isFirstReachedThreshold) {
            copySizes[resizerIndex.current] = maxSize - copySizes[resizerIndex.current - 1];
        }
        else if (isSecondReachedThreshold) {
            copySizes[resizerIndex.current - 1] = maxSize - copySizes[resizerIndex.current];
        }
        setSizes(copySizes);
    };
    var handleMouseUp = function (u) {
        u.preventDefault();
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };
    var handleMouseDown = function (e, resizer) {
        e.preventDefault();
        paneRefs.current = itemRefs.current.map(function (item) { return item.getBoundingClientRect(); });
        resizerIndex.current = resizer;
        startPos.current = dir === 'col' ? e.clientY : e.clientX;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    return (_jsx(ConviSplitPanelStyle, __assign({ dir: dir }, divProps, { children: children.map(function (child, index) { return (_jsxs(_Fragment, { children: [_jsx(ConviSplitPanelItem, __assign({ ref: function (el) {
                        itemRefs.current[index] = el;
                    }, size: sizes[index], dir: dir }, { children: child }), "".concat(dir, "-").concat(1 * index)), index !== children.length - 1 && (_jsx(ConviSplitPanelResizerStyle, { dir: dir, resizerThickness: resizerThickness, onMouseDown: function (e) { return handleMouseDown(e, index + 1); } }))] })); }) })));
};
ConviSplitPanel.defaultProps = {
    dir: 'col',
    resizerThickness: 2,
};
export default ConviSplitPanel;
