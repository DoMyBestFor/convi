/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import { AiOutlineClose } from 'react-icons/ai';
import React, { forwardRef, useState } from 'react';
import { useTabTitles } from '../../hooks/hooks';
import { closeButtonStyle, iconStyle, tabHeaderElementStyle } from '../../style/ConviTabStyle';

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
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}
		>
			<span css={iconStyle}>{icon}</span>
			{titleContent()}
			{fixed || <AiOutlineClose css={closeButtonStyle(displayCloseButton)} onClick={handleClose} />}
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
