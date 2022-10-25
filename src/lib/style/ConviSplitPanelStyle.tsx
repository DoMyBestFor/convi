import styled from '@emotion/styled';

export const ConviSplitPanelStyle = styled.div<{ dir: 'col' | 'row' }>`
	display: flex;
	flex-direction: ${props => (props.dir === 'col' ? 'column' : 'row')};
	height: 100%;
	width: 100%;
`;
