import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import { ConviSplitPanelItem } from './ConviSplitPanelItem';
import { ConviSplitPanelResizerStyle, ConviSplitPanelStyle } from '../style/ConviSplitPanelStyle';

// TODO
// 1. hover 상태 css 추가
// 2. min / max size 설정 추가
// 3. init size / ratio 설정 추가

export interface ConviSplitPanelProp extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode[];
	dir?: 'col' | 'row';
}

export const ConviSplitPanel: React.FC<ConviSplitPanelProp> = (props: ConviSplitPanelProp) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, dir = 'col', ...divProps } = props;

	const itemRefs = useRef<any[]>([]);
	const paneRefs = useRef<DOMRect[]>([]);
	const [sizes, setSizes] = useState<number[]>([]);
	const startPos = useRef<number>(0);
	const resizerIndex = useRef<number>(1);

	useEffect(() => {
		paneRefs.current = itemRefs.current.map(item => item.getBoundingClientRect());
		setSizes(paneRefs.current.map(pane => (dir === 'col' ? pane.height : pane.width)));
	}, [dir]);

	const handleMouseMove = (m: MouseEvent) => {
		m.preventDefault();
		const first = paneRefs.current[resizerIndex.current - 1];
		const second = paneRefs.current[resizerIndex.current];

		const copySizes = sizes.slice();

		const resizerSize = 2;
		const maxSize =
			dir === 'col' ? first.height + second.height - resizerSize : first.width + second.width - resizerSize;
		const minSize = 2;

		const move = m.clientY - startPos.current;

		copySizes[resizerIndex.current - 1] += move;
		copySizes[resizerIndex.current] -= move;

		// console.log(sizes.current[resizerIndex - 1]);
		// console.log(sizes.current[resizerIndex]);

		if (copySizes[resizerIndex.current - 1] > maxSize) {
			copySizes[resizerIndex.current - 1] = maxSize;
			copySizes[resizerIndex.current] = minSize;
		}
		if (copySizes[resizerIndex.current - 1] < minSize) {
			copySizes[resizerIndex.current - 1] = minSize;
			copySizes[resizerIndex.current] = maxSize;
		}
		if (copySizes[resizerIndex.current] > maxSize) {
			copySizes[resizerIndex.current] = maxSize;
			copySizes[resizerIndex.current - 1] = minSize;
		}
		if (copySizes[resizerIndex.current] < minSize) {
			copySizes[resizerIndex.current] = minSize;
			copySizes[resizerIndex.current - 1] = maxSize;
		}

		setSizes(copySizes);
	};

	const handleMouseUp = (u: MouseEvent) => {
		u.preventDefault();

		document.removeEventListener('mouseup', handleMouseUp);
		document.removeEventListener('mousemove', handleMouseMove);
	};

	const handleMouseDown = (e: React.MouseEvent, resizer: number) => {
		if (e.button !== 0) return;
		e.preventDefault();
		// console.log(resizer);
		resizerIndex.current = resizer; // set resizer
		startPos.current = dir === 'col' ? e.clientY : e.clientX;

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ConviSplitPanelStyle dir={dir} {...divProps}>
			{children.map((child: React.ReactNode, index: number) => (
				<>
					<ConviSplitPanelItem
						ref={el => {
							itemRefs.current[index] = el;
						}}
						size={sizes[index]}
						key={`${dir}-${1 * index}`}
						dir={dir}
					>
						{child}
					</ConviSplitPanelItem>
					{index !== children.length - 1 && (
						<ConviSplitPanelResizerStyle dir={dir} onMouseDown={e => handleMouseDown(e, index + 1)} />
					)}
				</>
			))}
		</ConviSplitPanelStyle>
	);
};

ConviSplitPanel.defaultProps = {
	dir: 'col',
};

export default ConviSplitPanel;
