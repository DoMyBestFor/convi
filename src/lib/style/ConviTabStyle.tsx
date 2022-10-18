import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ConviTabStyle = styled.div`
	display: flex;
	flex-direction: column;
	border: 3px solid black;

	& > div:nth-child(1) {
		display: flex;
		height: 50px;
		text-align: left;
		background-color: gray;
	}
`;

export const ConviTabHeaderElementStyle = styled.span<{ selected: boolean }>`
	display: flex;
	gap: 3px;
	margin-top: auto;
	padding-left: 3px;
	padding-right: 3px;
	margin-right: 3px;
	border-radius: 20px;
	cursor: pointer;
	background-color: ${props => (props.selected ? 'white' : 'black')};
	max-width: 10%;
`;

export const editStyle = css`
	width: 100%;
`;

export const nonEditStyle = css`
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;
