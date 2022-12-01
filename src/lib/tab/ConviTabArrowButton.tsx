/** @jsxImportSource @emotion/react */
import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { rightButtonStyle, leftButtonStyle } from '../../style/ConviTabStyle';

export const ConviTabArrowButton: React.FC<{
	direction: 'left' | 'right';
	scrollLocation: number;
	onClick: () => void;
}> = props => {
	const { direction, scrollLocation, onClick } = props;
	return direction === 'left' ? (
		<AiOutlineCaretRight css={rightButtonStyle(scrollLocation)} onClick={onClick} />
	) : (
		<AiOutlineCaretLeft css={leftButtonStyle(scrollLocation)} onClick={onClick} />
	);
};
