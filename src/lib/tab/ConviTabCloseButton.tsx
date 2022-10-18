import { AiOutlineClose } from 'react-icons/ai';
import styled from '@emotion/styled';

export const ConviTabCloseButton = styled(AiOutlineClose)<{ displayCloseBtn: boolean }>`
	margin-left: auto;
	margin-bottom: auto;
	margin-top: auto;
	:hover {
		color: red;
	}
	visibility: ${props => (props.displayCloseBtn ? 'visible' : 'hidden')};
`;
