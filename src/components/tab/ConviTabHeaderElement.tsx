import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ConviTabHeaderEditTitleStyle } from '../../style/tab/ConviTabHeaderEditTitleStyle';
import { ConviTabHeaderElementStyle } from '../../style/tab/ConviTabHeaderElementStyle';
import { ConviTabHeaderTitleStyle } from '../../style/tab/ConviTabHeaderTitleStyle';

const ConviTabCloseButton = styled(AiOutlineClose)`
	${tw`ml-auto mb-auto mt-auto hover:text-red-500`}
`;

interface ConviTabHeaderElementProps {
	children: string;
	selected: boolean;
	ableChangeTitle?: boolean;
	fixed?: boolean;
	onClick: () => void;
	onClose: () => void;
}

const useTabTitles = (title: string, onSelect: () => void, ableChangeTitle?: boolean) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [tabTitle, setTabTitle] = useState<string>(title);

	useEffect(() => {
		setTabTitle(title);
	}, [title]);

	return {
		titleContent:
			!editMode || !ableChangeTitle ? (
				<ConviTabHeaderTitleStyle onClick={() => onSelect()} onDoubleClick={() => setEditMode(true)}>
					{tabTitle}
				</ConviTabHeaderTitleStyle>
			) : (
				<ConviTabHeaderEditTitleStyle
					value={tabTitle}
					autoFocus
					onChange={(e: any) => setTabTitle(e.target.value)}
					onBlur={() => setEditMode(false)}
					onKeyDown={(e: any) => {
						if (e.key === 'Enter') setEditMode(false);
					}}
				/>
			),
	};
};

export const ConviTabHeaderElement: React.FC<ConviTabHeaderElementProps> = props => {
	const { titleContent } = useTabTitles(props.children, props.onClick, props.ableChangeTitle);
	const [displayCloseButton, setDisplayCloseButton] = useState<boolean>(false);

	return (
		<ConviTabHeaderElementStyle
			onMouseOver={() => setDisplayCloseButton(true)}
			onMouseOut={() => setDisplayCloseButton(false)}
			selected={props.selected}
		>
			{titleContent}
			{props.fixed || (
				<ConviTabCloseButton
					className={`${displayCloseButton ? 'visible' : 'invisible'}`}
					onClick={() => props.onClose()}
				/>
			)}
		</ConviTabHeaderElementStyle>
	);
};
