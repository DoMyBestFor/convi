import { AiOutlinePlus } from 'react-icons/ai';
import styled from '@emotion/styled';
import { theme } from '../../style/global/theme';

export const ConviTabPlusButton = styled(AiOutlinePlus)`
	width: 20px;
	height: 100%;
	text-align: center;
	justify-content: center;
	background-color: ${theme.colors.secondary};
	cursor: pointer;
	:hover {
		font-weight: bold;
		color: ${theme.colors['gray-500']};
	}
`;
