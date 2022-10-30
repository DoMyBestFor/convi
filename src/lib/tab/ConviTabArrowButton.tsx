import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const LeftButton = styled(AiOutlineCaretLeft)<{ scrollLocation: number }>`
	width: 20px;
	background-color: #eeeeee;
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
		background-color: #87cefa;
	}
`;

const RightButton = styled(AiOutlineCaretRight)<{ scrollLocation: number }>`
	width: 20px;
	background-color: #eeeeee;
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
		background-color: #87cefa;
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
