/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement, ConviTabElementProps } from './ConviTabElement';
import { swapArrayElement } from '../utils/Util';
import { ConviTabPlusButton } from './ConviTabPlusButton';
import { ConviTabStyle } from '../style/ConviTabStyle';
import { ConviTabScrollButton } from './ConviTabScrollButton';

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
	onAdd?: () => void;
}

export interface ElementPosition {
	index: number;
	rec: DOMRect;
	moved?: number;
}

const getPadding = (open: boolean) => {
	let paddingLeft = 0;
	let paddingRight = 0;
	if (open) {
		paddingLeft += 20;
		paddingRight += 20;
	}
	return `0 ${paddingRight}px 0 ${paddingLeft}px`;
};

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

	const headerRef = useRef<HTMLDivElement>(null); // tab 전체 길이를 알기 위해
	const refs = useRef<any>([]); // elements들의 position을 구하기 위해 for draggable tab
	const positions = useRef<ElementPosition[]>([]);

	const [open, setOpen] = useState<boolean>(false);
	const [scrollLocation, setScrollLocation] = useState(0);

	useEffect(() => {
		positions.current = children.map((_, childIndex) => {
			// assertion 사용 근거 : refs는 children에 대한 ref 객체 모음이기 때문에 length가 같다.
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const el = refs.current.find((__: unknown, index: number) => index === childIndex)!;
			const rec = el && el.getBoundingClientRect();

			return {
				index: childIndex,
				rec,
			};
		});

		if (headerRef.current) {
			if (headerRef.current.clientWidth < headerRef.current.scrollWidth) {
				setOpen(true);
				headerRef.current.style.padding = getPadding(true);
			} else {
				setOpen(false);
				headerRef.current.style.padding = getPadding(false);
			}
		}
	}, [children, selected, open]);

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

	const renderScrollButton = (showScrollButton: boolean) =>
		showScrollButton && <ConviTabScrollButton headerElement={headerRef.current} scrollLocation={scrollLocation} />;
	const renderAddButton = (showAddButton: boolean) =>
		showAddButton && (
			<span>
				<ConviTabPlusButton
					onClick={() => {
						// assertion 사용 근거 : showAddButton이 onAdd !== undefined로만 넘겨줄 것이기 때문.
						onAdd!();
						onSelected(children.length);
					}}
				/>
			</span>
		);

	return (
		<ConviTabStyle>
			<div className="header">
				<div className="tabList" ref={headerRef} onScroll={e => setScrollLocation(e.currentTarget.scrollLeft)}>
					{renderScrollButton(open)}
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
							onHeaderDrag={(e: React.DragEvent<HTMLSpanElement>) => handleDrag(tabIndex, e)}
							onHeaderDragEnd={(e: React.DragEvent<HTMLSpanElement>) => handleDragEnd(tabIndex, e)}
							onSelected={(index: number) => onSelected(index)}
							onClose={() => {
								onSelected(selected - 1 || selected + 1);
								onClose(tabIndex);
							}}
						>
							{child.props.title}
						</ConviTabHeaderElement>
					))}
				</div>
				{renderAddButton(onAdd !== undefined)}
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
	onAdd: undefined,
};

export default ConviTab;
