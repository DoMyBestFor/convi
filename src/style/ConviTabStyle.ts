import { css } from '@emotion/react';
import { theme } from './global/theme';

export const tabHeaderStyle = css`
	display: flex;
	height: 25px;
`;

export const tabListStyle = css`
	display: flex;
	text-align: left;
	background-color: ${theme.colors['gray-300']};
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	z-index: 100;
	scroll-behavior: smooth;
`;

export const tabHeaderElementStyle = (selected: boolean) => css`
	display: flex;
	height: '100%';
	margin-top: auto;
	padding-left: 10px;
	padding-right: 10px;
	margin-right: 5px;
	gap: 3px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	cursor: pointer;
	background-color: ${selected ? theme.colors.white : theme.colors['gray-400']};
	max-width: 10%;
`;

export const selectedStyle = (selected: boolean) => css`
	display: ${selected ? 'inline' : 'none'};
`;

export const iconStyle = css`
	margin-top: auto;
	margin-bottom: auto;
`;

export const editStyle = css`
	width: 50%;
`;

export const nonEditStyle = css`
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const leftButtonStyle = (scrollLocation: number) => css`
	width: 20px;
	background-color: ${theme.colors.secondary};
	height: 25px;
	display: inline-block;
	filter: none;
	position: absolute;
	justify-content: center;
	text-align: center;
	z-index: 500;
	left: ${scrollLocation}px;
	cursor: pointer;
	:hover {
		background-color: ${theme.colors['primary-hover']};
	}
`;

export const rightButtonStyle = (scrollLocation: number) => css`
	width: 20px;
	background-color: ${theme.colors.secondary};
	height: 25px;
	display: inline-block;
	filter: none;
	position: absolute;
	justify-content: center;
	text-align: center;
	z-index: 500;
	right: ${scrollLocation}px;
	cursor: pointer;
	:hover {
		background-color: ${theme.colors['primary-hover']};
	}
`;

export const plusButtonStyle = css`
	width: 20px;
	height: 100%;
	text-align: center;
	justify-content: center;
	background-color: ${theme.colors.secondary};
	cursor: pointer;
	:hover {
		font-weight: bold;
		color: ${theme.colors['gray-500']};
	}
`;

export const closeButtonStyle = (displayCloseBtn: boolean) => css`
	margin-left: auto;
	margin-bottom: auto;
	margin-top: auto;
	:hover {
		color: ${theme.colors.error};
	}
	visibility: ${displayCloseBtn ? 'visible' : 'hidden'};
`;
