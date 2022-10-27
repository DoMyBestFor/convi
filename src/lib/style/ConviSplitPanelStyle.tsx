import styled from '@emotion/styled';

export const ConviSplitPanelStyle = styled.div<{ dir: 'col' | 'row' }>`
	display: flex;
	position: absolute;
	outline: none;
	overflow: hidden;
	user-select: text;
	flex: 1;
	flex-direction: ${props => (props.dir === 'col' ? 'column' : 'row')};
	height: 100%;
	width: 100%;
`;

export const ConviSplitPanelItemStyle = styled.div<{
	size: number;
	dir: 'col' | 'row';
}>`
	background-color: beige;
	height: ${props => props.dir === 'col' && `${props.size}px`};
	width: ${props => props.dir === 'row' && `${props.size}px`};
`;

export const ConviSplitPanelResizerStyle = styled.div<{ dir: 'col' | 'row' }>`
	background-color: gray;
	width: ${props => props.dir !== 'col' && '0.15rem'};
	height: ${props => props.dir === 'col' && '0.15rem'};
	cursor: ${props => (props.dir === 'col' ? 'ns-resize' : 'ew-resize')};
`;
