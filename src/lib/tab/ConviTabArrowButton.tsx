import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { theme } from '../../style/global/theme';

const LeftButton = styled(AiOutlineCaretLeft)<{ scrollLocation: number }>`
	width: 20px;
	background-color: ${theme.colors.secondary};
	height: 25px;
	display: inline-block;
	filter: none;
	position: absolute;
	justify-content: center;
	text-align: center;
	z-index: 500;
	left: ${props => `${props.scrollLocation}px`};
	cursor: pointer;
	:hover {
		background-color: ${theme.colors['primary-hover']};
	}
`;

const RightButton = styled(AiOutlineCaretRight)<{ scrollLocation: number }>`
	width: 20px;
	background-color: ${theme.colors.secondary};
	height: 25px;
	display: inline-block;
	filter: none;
	position: absolute;
	justify-content: center;
	text-align: center;
	z-index: 500;
	right: ${props => `${props.scrollLocation}px`};
	cursor: pointer;
	:hover {
		background-color: ${theme.colors['primary-hover']};
	}
`;

export const ConviTabArrowButton: React.FC<{
	direction: 'left' | 'right';
	scrollLocation: number;
	onClick: () => void;
}> = props => {
	const { direction, scrollLocation, onClick } = props;
	return direction === 'left' ? (
		<LeftButton scrollLocation={scrollLocation} onClick={() => onClick()} />
	) : (
		<RightButton scrollLocation={scrollLocation} onClick={() => onClick()} />
	);
};
