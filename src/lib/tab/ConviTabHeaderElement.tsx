import React, { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import { ConviTabHeaderEditTitleStyle } from '../../style/tab/ConviTabHeaderEditTitleStyle';
import { ConviTabHeaderElementStyle } from '../../style/tab/ConviTabHeaderElementStyle';
import { ConviTabHeaderTitleStyle } from '../../style/tab/ConviTabHeaderTitleStyle';
import { ConviTabCloseButton } from './ConviTabCloseButton';

// Types
export interface ConviTabHeaderElementProps extends HTMLAttributes<HTMLSpanElement> {
	children: string;
	selected: boolean;
	index: number;
	onTabTitleChange: (newTitle: string) => void;
	draggableTab?: boolean;
	ableChangeTitle?: boolean;
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
				<ConviTabHeaderEditTitleStyle
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
				<ConviTabHeaderTitleStyle onDoubleClick={handleDoubleClick}>{tabTitle}</ConviTabHeaderTitleStyle>
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
		...spanProps
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
			{...spanProps}
			ref={ref}
			draggable={draggableTab}
			selected={selected}
			onClick={handleClick}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			{titleContent()}
			{fixed || (
				<ConviTabCloseButton className={`${displayCloseButton ? 'visible' : 'invisible'}`} onClick={handleClose} />
			)}
		</ConviTabHeaderElementStyle>
	);
});

// Default Props
ConviTabHeaderElement.defaultProps = {
	draggableTab: true,
	ableChangeTitle: false,
	fixed: false,
};
