import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ConviTabStyle = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;

	// header
	& > div:nth-child(1) {
		display: flex;
		height: 25px;
		text-align: left;
		background-color: lightgray;
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
