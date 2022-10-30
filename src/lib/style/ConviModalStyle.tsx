import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ConviModalStyleProps {
	open: boolean;
	width?: string;
	height?: string;
}

export const ConviModalStyle = styled.div<ConviModalStyleProps>`
	// Modal Global Style
	display: flex;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	text-align: center;
	justify-content: center;
	visibility: ${props => (props.open ? 'visible' : 'hidden')};

	// Backdrop Style
	& > div:nth-child(1) {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		background-color: gray;
		opacity: 50;
		top: 0;
		left: 0;
	}

	// Content Style
	& > div:nth-child(2) {
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 6px;
		padding-bottom: 6px;
		z-index: 20;
		background-color: white;
		border: 2px solid gray;
		max-width: 80%;
		max-height: 80%;
		min-width: 30%;
		min-height: 30%;
		width: ${props => props.width};
		height: ${props => props.height};
	}
`;

export const ConviModalTitle = css`
	display: flex;
	flex-direction: row;
	border-bottom: 3px solid gray;
	font-weight: bold;
	margin-bottom: 10px;
`;
