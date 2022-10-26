import React, { useState } from 'react';
import { ConviSplitPanelItemStyle, ConviSplitPanelResizerStyle } from '../style/ConviSplitPanelStyle';

export interface ConviSplitPanelItemProp {
	children: React.ReactNode;
	initialSize?: number;
	hasResizer?: boolean;
	dir?: 'col' | 'row';
}

const useResizer = (initialSize: number, dir: 'col' | 'row') => {
	const [size, setSize] = useState<number>(initialSize);

	const handleResize = (e: React.MouseEvent) => {
		e.preventDefault(); // drag 이벤트를 prevent
		const initSize = size;
		const initPos = dir === 'col' ? e.pageY : e.pageX;

		const onMouseMove = (m: MouseEvent) => {
			m.preventDefault();
			setSize(Math.max(initSize - (initPos - (dir === 'col' ? m.pageY : m.pageX)), 0));
		};

		const onMouseUp = () => window.removeEventListener('mousemove', onMouseMove);

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp, { once: true });
	};

	return {
		size,
		handleResize,
	};
};

export const ConviSplitPanelItem: React.FC<ConviSplitPanelItemProp> = (props: ConviSplitPanelItemProp) => {
	const { children, hasResizer = true, dir = 'col', initialSize = 100 } = props;
	const { size, handleResize } = useResizer(initialSize, dir);
	return (
		<>
			<ConviSplitPanelItemStyle grow={!hasResizer} dir={dir} size={size}>
				{children}
			</ConviSplitPanelItemStyle>
			{hasResizer && <ConviSplitPanelResizerStyle dir={dir} onMouseDown={handleResize} />}
		</>
	);
};

ConviSplitPanelItem.defaultProps = {
	hasResizer: true,
	dir: 'col',
	initialSize: 100,
};
