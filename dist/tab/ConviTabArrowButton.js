var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
var LeftButton = styled(AiOutlineCaretLeft)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 20px;\n\tbackground-color: #eeeeee;\n\theight: 25px;\n\tdisplay: inline-block;\n\tfilter: none;\n\tposition: absolute;\n\tjustify-content: center;\n\ttext-align: center;\n\tz-index: 500;\n\tleft: ", ";\n\tcursor: pointer;\n\t:hover {\n\t\tbackground-color: #87cefa;\n\t}\n"], ["\n\twidth: 20px;\n\tbackground-color: #eeeeee;\n\theight: 25px;\n\tdisplay: inline-block;\n\tfilter: none;\n\tposition: absolute;\n\tjustify-content: center;\n\ttext-align: center;\n\tz-index: 500;\n\tleft: ", ";\n\tcursor: pointer;\n\t:hover {\n\t\tbackground-color: #87cefa;\n\t}\n"])), function (props) { return "".concat(props.scrollLocation, "px"); });
var RightButton = styled(AiOutlineCaretRight)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\twidth: 20px;\n\tbackground-color: #eeeeee;\n\theight: 25px;\n\tdisplay: inline-block;\n\tfilter: none;\n\tposition: absolute;\n\tjustify-content: center;\n\ttext-align: center;\n\tz-index: 500;\n\tright: ", ";\n\tcursor: pointer;\n\t:hover {\n\t\tbackground-color: #87cefa;\n\t}\n"], ["\n\twidth: 20px;\n\tbackground-color: #eeeeee;\n\theight: 25px;\n\tdisplay: inline-block;\n\tfilter: none;\n\tposition: absolute;\n\tjustify-content: center;\n\ttext-align: center;\n\tz-index: 500;\n\tright: ", ";\n\tcursor: pointer;\n\t:hover {\n\t\tbackground-color: #87cefa;\n\t}\n"])), function (props) { return "".concat(props.scrollLocation, "px"); });
export var ConviTabArrowButton = function (props) {
    var direction = props.direction, scrollLocation = props.scrollLocation, onClick = props.onClick;
    return direction === 'left' ? (_jsx(LeftButton, { scrollLocation: scrollLocation, onClick: function () { return onClick(); } })) : (_jsx(RightButton, { scrollLocation: scrollLocation, onClick: function () { return onClick(); } }));
};
var templateObject_1, templateObject_2;
