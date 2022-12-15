import { css } from '@emotion/react';

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
