import { AiOutlineClose } from 'react-icons/ai';
import styled from '@emotion/styled';
import { theme } from '../../style/global/theme';

export const ConviTabCloseButton = styled(AiOutlineClose)<{ displayCloseBtn: boolean }>`
	margin-left: auto;
	margin-bottom: auto;
	margin-top: auto;
	:hover {
		color: ${theme.colors.error};
	}
	visibility: ${props => (props.displayCloseBtn ? 'visible' : 'hidden')};
`;
