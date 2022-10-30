/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { forwardRef, useEffect, useState } from 'react';
import { ConviTabHeaderElementStyle, editStyle, nonEditStyle } from '../style/ConviTabStyle';
import { ConviTabCloseButton } from './ConviTabCloseButton';

// Types
export interface ConviTabHeaderElementProps {
	children: string;
	selected: boolean;
	index: number;
	onTabTitleChange: (newTitle: string) => void;
	onHeaderDrag: (e: any) => void;
	onHeaderDragEnd: (e: any) => void;
	draggableTab?: boolean;
	ableChangeTitle?: boolean;
	icon?: React.ReactElement;
	fixed?: boolean;
	onSelected: (index: number) => void;
	onClose: () => void;
}

// Custom Hooks
const useTabTitles = (title: string, onTabTitleChange: (newTitle: string) => void, ableChangeTitle?: boolean) => {
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
					autoFocus
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
		fixed,
		onClose,
		ableChangeTitle,
		draggableTab,
		icon,
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
		<ConviTabHeaderElementStyle
			// eslint-disable-next-line react/jsx-props-no-spreading
			ref={ref}
			draggable={draggableTab}
			selected={selected}
			onDrag={e => onHeaderDrag(e)}
			onDragEnd={e => onHeaderDragEnd(e)}
			onClick={handleClick}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<span
				css={css`
					margin-top: auto;
					margin-bottom: auto;
				`}
			>
				{icon}
			</span>
			{titleContent()}
			{fixed || <ConviTabCloseButton displayCloseBtn={displayCloseButton} onClick={handleClose} />}
		</ConviTabHeaderElementStyle>
	);
});

// Default Props
ConviTabHeaderElement.defaultProps = {
	draggableTab: false,
	ableChangeTitle: false,
	fixed: false,
	icon: undefined,
};
