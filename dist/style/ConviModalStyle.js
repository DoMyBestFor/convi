var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import { css } from '@emotion/react';
export var ConviModalStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t// Modal Global Style\n\tdisplay: flex;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\ttop: 0;\n\tleft: 0;\n\ttext-align: center;\n\tjustify-content: center;\n\tvisibility: ", ";\n\n\t// Backdrop Style\n\t& > div:nth-child(1) {\n\t\tposition: fixed;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tz-index: 10;\n\t\tbackground-color: gray;\n\t\topacity: 50;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\n\t// Content Style\n\t& > div:nth-child(2) {\n\t\tpadding-left: 8px;\n\t\tpadding-right: 8px;\n\t\tpadding-top: 6px;\n\t\tpadding-bottom: 6px;\n\t\tz-index: 20;\n\t\tbackground-color: white;\n\t\tborder: 2px solid gray;\n\t\tmax-width: 80%;\n\t\tmax-height: 80%;\n\t\tmin-width: 30%;\n\t\tmin-height: 30%;\n\t\twidth: ", ";\n\t\theight: ", ";\n\t}\n"], ["\n\t// Modal Global Style\n\tdisplay: flex;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\ttop: 0;\n\tleft: 0;\n\ttext-align: center;\n\tjustify-content: center;\n\tvisibility: ", ";\n\n\t// Backdrop Style\n\t& > div:nth-child(1) {\n\t\tposition: fixed;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tz-index: 10;\n\t\tbackground-color: gray;\n\t\topacity: 50;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n\n\t// Content Style\n\t& > div:nth-child(2) {\n\t\tpadding-left: 8px;\n\t\tpadding-right: 8px;\n\t\tpadding-top: 6px;\n\t\tpadding-bottom: 6px;\n\t\tz-index: 20;\n\t\tbackground-color: white;\n\t\tborder: 2px solid gray;\n\t\tmax-width: 80%;\n\t\tmax-height: 80%;\n\t\tmin-width: 30%;\n\t\tmin-height: 30%;\n\t\twidth: ", ";\n\t\theight: ", ";\n\t}\n"])), function (props) { return (props.open ? 'visible' : 'hidden'); }, function (props) { return props.width; }, function (props) { return props.height; });
export var ConviModalTitle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tborder-bottom: 3px solid gray;\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tborder-bottom: 3px solid gray;\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n"])));
var templateObject_1, templateObject_2;