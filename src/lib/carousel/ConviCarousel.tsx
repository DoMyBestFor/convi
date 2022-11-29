import styled from '@emotion/styled';
import React, { useState } from 'react';

export interface ConviCarouselProps {
	size?: string;
	children: React.ReactElement[];
}

export const ConviCarouselContainer = styled.div<{ size: string }>`
	display: flex;
	gap: 10px;
	width: ${props => props.size};
`;

export const ConviCarouselTrailer = styled.div`
	display: flex;
	overflow: hidden;
`;

export const ConviCarousel: React.FC<ConviCarouselProps> = props => {
	const { children, size = 'auto' } = props;
	const [current, setCurrent] = useState<number>(0);

	return (
		<ConviCarouselContainer size={size}>
			<button type="button">{'<'}</button>
			<div>{children}</div>
			<button type="button">{'>'}</button>
		</ConviCarouselContainer>
	);
};

ConviCarousel.defaultProps = {
	size: 'auto',
};

// full width? selected width?
