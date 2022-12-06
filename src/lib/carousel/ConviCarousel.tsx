/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

export interface ConviCarouselProps {
	width?: string;
	height?: string;
	children: React.ReactElement[];
}

export const containerStyle = (width: string, height: string) => css`
	display: flex;
	gap: 10px;
	width: ${width};
	height: ${height};
`;

export const trailerStyle = (width: string, height: string) => css`
	display: flex;
	flex-wrap: nowrap;
	width: ${width};
	height: ${height};
	padding: 0 10px;
	overflow: hidden;

	& > .trail:not(.current) {
		animation: out 3s forwards;
		display: none;
	}

	& > .trail.current {
		animation: show 3s forwards ease-in-out;
		display: flex;
		width: ${width};
		height: ${height};
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	@keyframes show {
		from {
			transform: scale(0);
		}
		50% {
			transform: scale(0.5);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes out {
		from {
			transform: translateX(-50%);
		}
		50% {
			transform: translateX(-75%);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;

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
