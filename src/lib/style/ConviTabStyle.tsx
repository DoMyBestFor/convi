import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ConviTabStyle = styled.div`
	.header {
		display: flex;
		height: 25px;
	}

	.tabList {
		display: flex;
		text-align: left;
		background-color: lightgray;
		position: relative;
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
		z-index: 100;
		scroll-behavior: smooth;
	}
`;

export const ConviTabHeaderElementStyle = styled.span<{ selected: boolean }>`
	display: flex;
	gap: 3px;
	margin-top: auto;
	padding-left: 10px;
	padding-right: 10px;
	margin-right: 5px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	cursor: pointer;
	background-color: ${props => (props.selected ? 'white' : '#E5E7Eb')};
	min-width: 5%;
	max-width: 8%;
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
