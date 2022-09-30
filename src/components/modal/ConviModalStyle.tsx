import styled from 'styled-components';
import tw from 'twin.macro';

interface ConviModalStyleProps {
	open: boolean;
}

export const ConviModalStyle = styled.div<ConviModalStyleProps>`
	${tw`flex w-screen h-screen top-0 left-0 fixed items-center justify-center`}
	visibility: ${props => (props.open ? 'visible' : 'hidden')};
`;
