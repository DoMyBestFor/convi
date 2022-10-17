import styled from 'styled-components';

interface ConviModalStyleProps {
	open: boolean;
}

export const ConviModalStyle = styled.div<ConviModalStyleProps>`
	display: flex;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	position: fixed;
	align-items: center;
	justify-content: center;
	visibility: ${props => (props.open ? 'visible' : 'hidden')};
`;
