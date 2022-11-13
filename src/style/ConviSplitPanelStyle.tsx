import { css } from '@emotion/react';
import { theme } from './global/theme';

export type SplitDirection = 'col' | 'row';

export const panelStyle = (dir: SplitDirection) => css`
	display: flex;
	outline: none;
	overflow: hidden;
	user-select: text;
	flex: 1;
	flex-direction: ${dir === 'col' ? 'column' : 'row'};
	height: 100%;
	width: 100%;
`;

export const panelItemStyle = (
	dir: SplitDirection,
	isGrow: boolean,
	minSize: number,
	maxSize: number,
	size?: number
) => css`
	height: ${dir === 'col' && size && `${size}px`};
	width: ${dir === 'row' && size && `${size}px`};
	max-height: ${dir === 'col' && maxSize === Infinity ? 'none' : `${maxSize}px`};
	max-width: ${dir === 'row' && maxSize === Infinity ? 'none' : `${maxSize}px`};
	min-height: ${dir === 'col' && `${minSize}px`};
	min-width: ${dir === 'row' && `${minSize}px`};
	flex-grow: ${isGrow ? 1 : 0};
`;

export const resizerStyle = (dir: SplitDirection, thickness: number) => css`
	background-color: ${theme.colors['gray-500']};
	width: ${dir !== 'col' && `${thickness}px`};
	height: ${dir === 'col' && `${thickness}px`};
	cursor: ${dir === 'col' ? 'ns-resize' : 'ew-resize'};
`;
