/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement, ConviTabElementProps } from './ConviTabElement';
import { swapArrayElement } from '../utils/Util';
import { ConviTabPlusButton } from './ConviTabPlusButton';
import { ConviTabStyle } from '../style/ConviTabStyle';

// Type
export interface ConviTabProps {
	selected: number;
	ableChangeTitle?: boolean;
	forceRender?: boolean;
	draggableTab?: boolean;
	children: React.ReactElement<ConviTabElementProps>[];
	onClose: (index: number) => void;
	onTabPositionChange: (currentTabs: React.ReactElement<ConviTabElementProps>[]) => void;
	onSelected: (index: number) => void;
	onAdd: () => boolean;
}

export interface ElementPosition {
	index: number;
	rec: DOMRect;
	moved?: number;
}

export const ConviTab: React.FC<ConviTabProps> = props => {
	const {
		selected,
		ableChangeTitle,
		forceRender,
		draggableTab,
		children,
		onClose,
		onTabPositionChange,
		onSelected,
		onAdd,
	} = props;

	const refs = useRef<any>([]);

	const positions = useRef<ElementPosition[]>([]);

	useEffect(() => {
		positions.current = children.map((_, childIndex) => {
			const el = refs.current.find((__: unknown, index: number) => index === childIndex);
			const rec = el && el.getBoundingClientRect();

			return {
				index: childIndex,
				rec,
			};
		});
	}, [children, selected]);

	const handleDrag = (index: number, e: React.DragEvent<HTMLSpanElement>) => {
		const delta = e.pageX || e.clientX;

		positions.current.forEach(pos => {
			const prevMoved = pos.moved || 0;
			const swap = index !== pos.index && pos.rec.left + prevMoved < delta && delta < pos.rec.right + prevMoved;
			if (swap) {
				const idx1 = index;
				const idx2 = pos.index;

				const minus = idx1 > idx2 ? 1 : -1;
				const movePx = minus * (pos.rec.right - pos.rec.left) - prevMoved;

				refs.current[pos.index].style.transform = `translate(${movePx}px, 0px)`;
				positions.current[idx2].moved = movePx;
			}
		});
	};

	const handleDragEnd = (index: number, e: React.DragEvent<HTMLSpanElement>) => {
		const delta = e.pageX || e.clientX;
		let swapedTabs = null;

		positions.current.forEach(pos => {
			const swap = index !== pos.index && pos.rec.left < delta && delta < pos.rec.right;
			if (swap) swapedTabs = swapArrayElement(children, index, pos.index);
			refs.current[pos.index].style.transform = `translate(0px, 0px)`;
		});

		const newTabs = swapedTabs || children;
		if (swapedTabs) {
			onSelected(index);
			onTabPositionChange(newTabs);
		}
	};

	const handleTabTitleChange = (
		newTitle: string,
		currentIndex: number,
		currentTabs: React.ReactElement<ConviTabElementProps>[]
	) => {
		const newTabs = currentTabs.map((tab, index) =>
			currentIndex === index ? (
				<ConviTabElement title={newTitle} fixed={tab.props.fixed}>
					{tab.props.children}
				</ConviTabElement>
			) : (
				tab
			)
		);
		onTabPositionChange(newTabs);
	};

	return (
		<ConviTabStyle>
			<div>
				{children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						ref={el => {
							refs.current[tabIndex] = el;
						}}
						key={`${child.props.title}-${tabIndex * 1}`}
						index={tabIndex}
						selected={selected === tabIndex}
						fixed={child.props.fixed}
						ableChangeTitle={ableChangeTitle}
						draggableTab={draggableTab}
						onTabTitleChange={(newTitle: string) => handleTabTitleChange(newTitle, tabIndex, children)}
						onHeaderDrag={(e: any) => handleDrag(tabIndex, e)}
						onHeaderDragEnd={(e: any) => handleDragEnd(tabIndex, e)}
						onSelected={(index: number) => onSelected(index)}
						onClose={() => {
							onSelected(selected - 1 || selected + 1);
							onClose(tabIndex);
						}}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}

				{onAdd() && (
					<ConviTabPlusButton
						onClick={() => {
							onAdd();
							onSelected(children.length);
						}}
					/>
				)}
			</div>

			{!forceRender
				? children.map((child, index) => (
						<span
							key={`${child.props.title}-${index * 1}`}
							css={css`
								display: ${selected === index ? 'inline' : 'none'};
							`}
						>
							{child}
						</span>
				  ))
				: children[selected]}
		</ConviTabStyle>
	);
};

// default Props
ConviTab.defaultProps = {
	ableChangeTitle: false,
	forceRender: false,
	draggableTab: true,
};

export default ConviTab;
