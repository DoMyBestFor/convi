/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { panelStyle, resizerStyle } from '../../style/ConviSplitPanelStyle';

import { ConviSplitPanelItem, ConviSplitPanelItemProp } from './ConviSplitPanelItem';

/**
 * initialRatio, flex-grow 적용
 */

export interface ConviSplitPanelProp extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Splited Components ( >= 2)
	 */
	children: React.ReactElement<ConviSplitPanelItemProp>[];
	/**
	 * resizer thickness (px)
	 */
	resizerThickness?: number;
	/**
	 * split direction
	 */
	dir?: 'col' | 'row';
}

/**
 * SplitPanel Component
 */
export const ConviSplitPanel: React.FC<ConviSplitPanelProp> = (props: ConviSplitPanelProp) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, dir = 'col', resizerThickness = 2, ...divProps } = props;

	const [sizes, setSizes] = useState<number[]>([]);
	const itemRefs = useRef<any[]>([]);
	const paneRefs = useRef<DOMRect[]>([]);
	const startPos = useRef<number>(0);
	const resizerIndex = useRef<number>(1);
	const minSizes = useRef<number[]>([]);
	const maxSizes = useRef<number[]>([]);

	// assertion 근거 : minsize와 maxsize의 default props가 설정되어 있음.
	const getMinSizes = () => children.map(child => child.props.minSize!); // get minSize props
	const getMaxSizes = () => children.map(child => child.props.maxSize!); // get maxSize props

	useEffect(() => {
		paneRefs.current = itemRefs.current.map(item => item.getBoundingClientRect()); // set pane info
		setSizes(paneRefs.current.map(pane => (dir === 'col' ? pane.height : pane.width))); // set sizes
		minSizes.current = getMinSizes(); // set min sizes
		maxSizes.current = getMaxSizes(); // set max sizes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dir]);

	const handleMouseMove = (m: MouseEvent) => {
		m.preventDefault(); // drag event 방지

		const first = paneRefs.current[resizerIndex.current - 1]; // resizer 기준 첫번째 (왼쪽, 위쪽)
		const second = paneRefs.current[resizerIndex.current]; // resizer 기준 두번째

		const copySizes = sizes.slice(); // temp array

		// first size + second size
		const maxSize =
			dir === 'col' ? first.height + second.height - resizerThickness : first.width + second.width - resizerThickness;

		// min size
		const firstMinSize = minSizes.current[resizerIndex.current - 1];
		const secondMinSize = minSizes.current[resizerIndex.current];

		// max size
		const firstMaxSize = Math.min(maxSizes.current[resizerIndex.current - 1], maxSize);
		const secondMaxSize = Math.min(maxSizes.current[resizerIndex.current], maxSize);

		// move offset
		const move = dir === 'col' ? m.clientY - startPos.current : m.clientX - startPos.current;

		// moving
		copySizes[resizerIndex.current - 1] += move;
		copySizes[resizerIndex.current] -= move;

		// are they reached limited size?
		let isFirstReachedThreshold = false;
		let isSecondReachedThreshold = false;

		// max size 초과 시에는 maxsize로 초기화, min size 미만 시에는 minsize로 초기화
		if (copySizes[resizerIndex.current - 1] > firstMaxSize) {
			copySizes[resizerIndex.current - 1] = firstMaxSize;
			isFirstReachedThreshold = true;
		} else if (copySizes[resizerIndex.current - 1] < firstMinSize) {
			copySizes[resizerIndex.current - 1] = firstMinSize;
			isFirstReachedThreshold = true;
		}
		if (copySizes[resizerIndex.current] > secondMaxSize) {
			copySizes[resizerIndex.current] = secondMaxSize;
			isSecondReachedThreshold = true;
		} else if (copySizes[resizerIndex.current] < secondMinSize) {
			copySizes[resizerIndex.current] = secondMinSize;
			isSecondReachedThreshold = true;
		}

		// first가 max size나 min size가 되었다면 second는 maxSize - first size로 초기화
		if (isFirstReachedThreshold) {
			copySizes[resizerIndex.current] = maxSize - copySizes[resizerIndex.current - 1];
		} else if (isSecondReachedThreshold) {
			copySizes[resizerIndex.current - 1] = maxSize - copySizes[resizerIndex.current];
		}

		// set sizes
		setSizes(copySizes);
	};

	const handleMouseUp = (u: MouseEvent) => {
		u.preventDefault();

		document.removeEventListener('mouseup', handleMouseUp);
		document.removeEventListener('mousemove', handleMouseMove);
	};

	const handleMouseDown = (e: React.MouseEvent, resizer: number) => {
		e.preventDefault();
		paneRefs.current = itemRefs.current.map(item => item.getBoundingClientRect()); // set new panes
		resizerIndex.current = resizer; // set resizer
		startPos.current = dir === 'col' ? e.clientY : e.clientX; // set mouse down position

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div css={panelStyle(dir)} {...divProps}>
			{children.map((child: React.ReactElement<ConviSplitPanelItemProp>, index: number) => (
				<>
					<ConviSplitPanelItem
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...child.props}
						ref={el => {
							itemRefs.current[index] = el;
						}}
						size={sizes[index]}
						key={`${dir}-${1 * index}`}
						dir={dir}
						isGrow={children.length - 1 === index}
					>
						{child.props.children}
					</ConviSplitPanelItem>
					{index !== children.length - 1 && (
						<div
							role="presentation"
							css={resizerStyle(dir, resizerThickness)}
							onMouseDown={e => handleMouseDown(e, index + 1)}
						/>
					)}
				</>
			))}
		</div>
	);
};

ConviSplitPanel.defaultProps = {
	dir: 'col',
	resizerThickness: 2,
};

export default ConviSplitPanel;
