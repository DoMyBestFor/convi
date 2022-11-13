/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useState } from 'react';
import { editStyle, iconStyle, nonEditStyle, tabHeaderElementStyle } from '../../style/ConviTabStyle';
import { ConviTabCloseButton } from './ConviTabCloseButton';

// Types
export interface ConviTabHeaderElementProps {
	children: string;
	selected: boolean;
	index: number;
	onTabTitleChange: (newTitle: string) => void;
	onHeaderDrag: (e: React.DragEvent<HTMLSpanElement>) => void;
	onHeaderDragEnd: (e: React.DragEvent<HTMLSpanElement>) => void;
	draggableTab?: boolean;
	ableChangeTitle?: boolean;
	icon?: React.ReactElement;
	fixed?: boolean;
	onSelected: (index: number) => void;
	onClose: () => void;
}

// Custom Hooks
const useTabTitles = (title: string, onTabTitleChange: (newTitle: string) => void, ableChangeTitle: boolean) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [tabTitle, setTabTitle] = useState<string>(title);

	useEffect(() => {
		setTabTitle(title);
	}, [title]);

	const handleDoubleClick = () => setEditMode(true);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTabTitle(e.target.value);

	return {
		titleContent: () =>
			editMode && ableChangeTitle ? (
				<input
					css={editStyle}
					value={tabTitle}
					onChange={handleChange}
					onBlur={e => {
						onTabTitleChange(e.target.value);
						setEditMode(false);
					}}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							onTabTitleChange(e.currentTarget.value);
							setEditMode(false);
						}
					}}
				/>
			) : (
				<span css={nonEditStyle} onDoubleClick={handleDoubleClick}>
					{tabTitle}
				</span>
			),
	};
};

export const ConviTabHeaderElement = forwardRef<
	React.ReactElement<ConviTabHeaderElementProps>,
	ConviTabHeaderElementProps
>((props: ConviTabHeaderElementProps, ref: any) => {
	const {
		children,
		onSelected,
		index,
		selected,
		onTabTitleChange,
		fixed = false,
		onClose,
		ableChangeTitle = false,
		draggableTab = false,
		icon = undefined,
		onHeaderDrag,
		onHeaderDragEnd,
	} = props;

	const [displayCloseButton, setDisplayCloseButton] = useState<boolean>(false);
	const { titleContent } = useTabTitles(children, onTabTitleChange, ableChangeTitle);

	const handleClick = () => onSelected(index);
	const handleClose = () => onClose();
	const handleMouseOver = () => setDisplayCloseButton(true);
	const handleMouseOut = () => setDisplayCloseButton(false);

	return (
		<span
			css={tabHeaderElementStyle(selected)}
			ref={ref}
			draggable={draggableTab}
			onDrag={e => onHeaderDrag(e)}
			onDragEnd={e => onHeaderDragEnd(e)}
			onClick={handleClick}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<span css={iconStyle}>{icon}</span>
			{titleContent()}
			{fixed || <ConviTabCloseButton displayCloseBtn={displayCloseButton} onClick={handleClose} />}
		</span>
	);
});

// Default Props
ConviTabHeaderElement.defaultProps = {
	draggableTab: false,
	ableChangeTitle: false,
	fixed: false,
	icon: undefined,
};
