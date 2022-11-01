import styled from '@emotion/styled';

export const ConviSplitPanelStyle = styled.div<{ dir: 'col' | 'row' }>`
	display: flex;
	outline: none;
	overflow: hidden;
	user-select: text;
	flex: 1;
	flex-direction: ${props => (props.dir === 'col' ? 'column' : 'row')};
	height: 100%;
	width: 100%;
`;

export const ConviSplitPanelItemStyle = styled.div<{
	size?: number;
	minSize: number;
	maxSize: number;
	isGrow: boolean;
	dir: 'col' | 'row';
}>`
	height: ${props => props.dir === 'col' && props.size && `${props.size}px`};
	width: ${props => props.dir === 'row' && props.size && `${props.size}px`};
	max-height: ${props => (props.dir === 'col' && props.maxSize === Infinity ? 'none' : `${props.maxSize}px`)};
	max-width: ${props => (props.dir === 'row' && props.maxSize === Infinity ? 'none' : `${props.maxSize}px`)};
	min-height: ${props => props.dir === 'col' && `${props.minSize}px`};
	min-width: ${props => props.dir === 'row' && `${props.minSize}px`};
	flex-grow: ${props => (props.isGrow ? 1 : 0)};
`;

export const ConviSplitPanelResizerStyle = styled.div<{ dir: 'col' | 'row'; resizerThickness: number }>`
	background-color: gray;
	width: ${props => props.dir !== 'col' && `${props.resizerThickness}px`};
	height: ${props => props.dir === 'col' && `${props.resizerThickness}px`};
	cursor: ${props => (props.dir === 'col' ? 'ns-resize' : 'ew-resize')};
`;
