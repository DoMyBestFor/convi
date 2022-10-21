/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement, ConviTabElementProps } from './ConviTabElement';
import { swapArrayElement } from '../utils/Util';
import { ConviTabPlusButton } from './ConviTabPlusButton';
import { ConviTabStyle } from '../style/ConviTabStyle';
import { useState } from 'react';

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

const ArrowButton: React.FC<{ headerRef: any }> = props => {
	const myRef = useRef<HTMLDivElement>(null);
	const a = 0;
	return (
		<div ref={myRef}>
			<span>
				<AiOutlineCaretLeft
					style={{
						width: '20px',
						backgroundColor: '#EEEEEE',
						height: '100%',
						display: 'inline-block',
						filter: 'none',
						position: 'absolute',
						// eslint-disable-next-line react/destructuring-assignment
						left: `${props.headerRef.scrollLeft}`,
						justifyContent: 'center',
						textAlign: 'center',
					}}
					onClick={() => {
						// eslint-disable-next-line react/destructuring-assignment
						props.headerRef.scrollTo(props.headerRef.scrollLeft - 10, 0);
					}}
				/>
			</span>
			<span>
				<AiOutlineCaretRight
					style={{
						width: '20px',
						backgroundColor: '#EEEEEE',
						height: '100%',
						display: 'inline-block',
						filter: 'none',
						position: 'absolute',
						// eslint-disable-next-line react/destructuring-assignment
						right: 0,
						justifyContent: 'center',
						textAlign: 'center',
					}}
					onClick={() => {
						// eslint-disable-next-line react/destructuring-assignment
						props.headerRef.scrollTo(props.headerRef.scrollLeft + 10, 0);
					}}
				/>
			</span>
		</div>
	);
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

	return (
		<ConviTabStyle>
			<div style={{ display: 'flex' }}>
				<div ref={headerRef}>
					{open && <ArrowButton headerRef={headerRef.current} />}
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
				</div>
				{onAdd && (
					<span>
						<ConviTabPlusButton
							style={{ height: '100%', textAlign: 'center', justifyContent: 'center', backgroundColor: '#EAEAEB' }}
							onClick={() => {
								onAdd();
								onSelected(children.length);
							}}
						/>
					</span>
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
	onAdd: () => 0,
};

export default ConviTab;
