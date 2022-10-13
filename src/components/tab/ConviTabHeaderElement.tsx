import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ConviTabHeaderEditTitleStyle } from '../style/tab/ConviTabHeaderEditTitleStyle';
import { ConviTabHeaderElementStyle } from '../style/tab/ConviTabHeaderElementStyle';
import { ConviTabHeaderTitleStyle } from '../style/tab/ConviTabHeaderTitleStyle';

const ConviTabCloseButton = styled(AiOutlineClose)`
	${tw`ml-auto mb-auto mt-auto hover:text-red-500`}
`;

interface ConviTabHeaderElementProps {
	children: string;
	selected: boolean;
	fixed?: boolean;
	onClick: () => void;
	onClose: () => void;
}

const useTabTitles = (title: string, fixed: boolean | undefined, onSelect: () => void) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [tabTitle, setTabTitle] = useState<string>(title);

	useEffect(() => {
		setTabTitle(title);
	}, [title]);

	return {
		titleContent: !editMode ? (
			<ConviTabHeaderTitleStyle onClick={() => onSelect()} fixed={fixed} onDoubleClick={() => setEditMode(true)}>
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
	const { titleContent } = useTabTitles(props.children, props.fixed, props.onClick);

	return (
		<ConviTabHeaderElementStyle selected={props.selected}>
			{titleContent}
			{props.fixed || <ConviTabCloseButton onClick={() => props.onClose()} />}
		</ConviTabHeaderElementStyle>
	);
};
