import { AiOutlineClose } from 'react-icons/ai';
import styled from '@emotion/styled';
import { theme } from '../../style/global/theme';

export const ConviModalCloseButton = styled(AiOutlineClose)`
	margin-left: auto;
	margin-top: auto;
	margin-bottom: auto;
	cursor: pointer;
	:hover {
		color: ${theme.colors.error};
	}
`;
