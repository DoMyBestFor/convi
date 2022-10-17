import styled from 'styled-components';

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
