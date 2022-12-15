/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { containerStyle, trailerStyle } from '../../style/ConviCarouselStyle';

export interface ConviCarouselProps {
	width?: string;
	height?: string;
	children: React.ReactElement[];
}

// todo
// useref 써서 scrollTo 만들기
export const ConviCarousel: React.FC<ConviCarouselProps> = props => {
	const { children, width = '100%', height = '100%' } = props;
	const [current, setCurrent] = useState<number>(0);

	const clones = children.map((child, index) => {
		const clone = React.cloneElement(child, { ...child.props, className: `trail ${index === current && 'current'}` });
		return clone;
	});

	return (
		<div css={containerStyle(width, height)}>
			<button
				type="button"
				onClick={() => {
					setCurrent(prev => (prev - 1 < 0 ? children.length - 1 : prev - 1));
				}}
			>
				{'<'}
			</button>
			<div css={trailerStyle(width, height)}>{clones}</div>
			<button
				type="button"
				onClick={() => {
					setCurrent(prev => (prev + 1 >= children.length ? 0 : prev + 1));
				}}
			>
				{'>'}
			</button>
		</div>
	);
};

ConviCarousel.defaultProps = {
	width: '100%',
	height: '100%',
};

export default ConviCarousel;

// full width? selected width?
