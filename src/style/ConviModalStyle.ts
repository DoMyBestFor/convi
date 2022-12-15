import { css } from '@emotion/react';
import { theme } from './global/theme';
import { font } from './global/font';

// modal global style
export const modalStyle = (open: boolean) => css`
	display: flex;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	text-align: center;
	justify-content: center;
	visibility: ${open ? 'visible' : 'hidden'};
`;

export const modalTitleStyle = css`
	display: flex;
	flex-direction: row;
	border-bottom: 3px solid ${theme.colors['gray-300']};
	margin-bottom: 10px;
	${font.h4}
`;

export const modalBackdropStyle = css`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	filter: blur(300px);
	background-color: ${theme.colors['gray-500']};
	opacity: 50;
	top: 0;
	left: 0;
`;

export const modalContentStyle = css`
	padding: 6px 8px;
	z-index: 20;
	background-color: ${theme.colors.white};
	border: 2px solid ${theme.colors['gray-300']};
	max-width: 80%;
	max-height: 80%;
	min-width: 30%;
	min-height: 30%;
	overflow: auto;
`;

export const modalCloseButtonStyle = css`
	margin-left: auto;
	margin-top: auto;
	margin-bottom: auto;
	cursor: pointer;
	:hover {
		color: ${theme.colors.error};
	}
`;
