import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement, ConviTabElementProps } from './ConviTabElement';
import { ConviTabHeaderStyle } from '../../style/tab/ConviTabHeaderStyle';
import { ConviTabStyle } from '../../style/tab/ConviTabStyle';
import { ConviTabPlusButton } from './ConviTabPlusButton';
import { swapArrayElement } from '../../utils/Util';

// Type
interface ConviTabProps extends HTMLAttributes<HTMLDivElement> {
	defaultIndex?: number;
	selected?: number;
	ableChangeTitle?: boolean;
	forceRender?: boolean;
	draggableTab?: boolean;
	children: React.ReactElement<ConviTabElementProps>[];
	// eslint-disable-next-line no-unused-vars
	onClose: (index: number) => void;
	// eslint-disable-next-line no-unused-vars
	onTabPositionChange: (currentTabs: React.ReactElement<ConviTabElementProps>[]) => void;
	// eslint-disable-next-line no-unused-vars
	onSelected: (index: number) => void;
	onAdd?: () => void;
}

interface ElementPosition {
	index: number;
	rec: DOMRect;
	moved?: number;
}

// Custom Hooks
// eslint-disable-next-line no-unused-vars
const useSelect = (onSelected: (index: number) => void, outer?: number, inner?: number) => {
	const [selected, setSelected] = useState<number | undefined>(inner);

	return {
		selectedTab: selected === undefined ? outer : selected,
		changeTab: outer === undefined ? setSelected : onSelected,
	};
};

export const ConviTab: React.FC<ConviTabProps> = props => {
	const { selectedTab, changeTab } = useSelect(props.onSelected, props.selected, props.defaultIndex);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const refs = useRef<any>([]);

	let positions: ElementPosition[] = [];

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		positions = props.children.map((_, childIndex) => {
			const el = refs.current.find((__: unknown, index: number) => index === childIndex);
			const rec = el && el.getBoundingClientRect();

			return {
				index: childIndex,
				rec,
			};
		});
	}, [props.children, props.selected]);

	const handleDrag = (index: number, e: React.DragEvent<HTMLSpanElement>) => {
		const delta = e.pageX || e.clientX;

		positions.forEach(pos => {
			const prevMoved = pos.moved || 0;
			const swap = index !== pos.index && pos.rec.left + prevMoved < delta && delta < pos.rec.right + prevMoved;
			if (swap) {
				const idx1 = index;
				const idx2 = pos.index;

				const minus = idx1 > idx2 ? 1 : -1;
				const movePx = minus * (pos.rec.right - pos.rec.left) - prevMoved;

				refs.current[pos.index].style.transform = `translate(${movePx}px, 0px)`;
				positions[idx2].moved = movePx;
			}
		});
	};

	const handleDragEnd = (index: number, e: React.DragEvent<HTMLSpanElement>) => {
		const delta = e.pageX || e.clientX;
		let swapedTabs = null;

		positions.forEach(pos => {
			const swap = index !== pos.index && pos.rec.left < delta && delta < pos.rec.right;
			if (swap) swapedTabs = swapArrayElement(props.children, index, pos.index);
			refs.current[pos.index].style.transform = `translate(0px, 0px)`;
		});

		const newTabs = swapedTabs || props.children;
		if (swapedTabs) {
			props.onSelected(index);
			props.onTabPositionChange(newTabs);
		}
	};

	const handleTabTitleChange = (
		newTitle: string,
		currentIndex: number,
		currentTabs: React.ReactElement<ConviTabElementProps>[]
	) => {
		const newTabs = currentTabs.map((tab, index) =>
			currentIndex === index ? <ConviTabElement {...tab.props} title={newTitle} /> : tab
		);
		props.onTabPositionChange(newTabs);
	};

	return (
		<ConviTabStyle>
			<ConviTabHeaderStyle>
				{props.children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						ref={el => {
							refs.current[tabIndex] = el;
						}}
						// eslint-disable-next-line react/no-array-index-key
						key={tabIndex}
						index={tabIndex}
						selected={selectedTab === tabIndex}
						fixed={child.props.fixed || props.defaultIndex !== undefined}
						ableChangeTitle={props.ableChangeTitle}
						draggableTab={props.draggableTab}
						onTabTitleChange={(newTitle: string) => handleTabTitleChange(newTitle, tabIndex, props.children)}
						onDrag={e => handleDrag(tabIndex, e)}
						onDragEnd={e => handleDragEnd(tabIndex, e)}
						onSelected={(index: number) => changeTab(index)}
						onClose={() => {
							// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
							changeTab(selectedTab! - 1 || selectedTab! + 1);
							props.onClose(tabIndex);
						}}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}

				{props.onAdd && props.defaultIndex === undefined && (
					<ConviTabPlusButton
						onClick={() => {
							props.onAdd?.();
							props.onSelected(props.children.length);
						}}
					/>
				)}
			</ConviTabHeaderStyle>

			{props.forceRender
				? selectedTab !== undefined &&
				  props.children.map((child, index) => (
						<span className={`${selectedTab === index ? 'inline' : 'hidden'}`}>{child}</span>
				  ))
				: selectedTab !== undefined && props.children[selectedTab]}
		</ConviTabStyle>
	);
};

// default Props
ConviTab.defaultProps = {
	ableChangeTitle: false,
	forceRender: false,
	draggableTab: true,
};
