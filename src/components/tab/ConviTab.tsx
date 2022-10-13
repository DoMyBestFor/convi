import { AiOutlinePlus } from 'react-icons/ai';
import tw from 'twin.macro';
import styled from 'styled-components';
import React, { HTMLAttributes } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElementProps } from './ConviTabElement';
import { ConviTabHeaderStyle } from '../../style/tab/ConviTabHeaderStyle';
import { ConviTabStyle } from '../../style/tab/ConviTabStyle';

const ConviTabPlusButton = styled(AiOutlinePlus)`
	${tw`mt-auto mb-1 cursor-pointer hover:text-gray-500`}
`;

interface ConviTabProps extends HTMLAttributes<HTMLDivElement> {
	selected: number;
	children: React.ReactElement<ConviTabElementProps>[];
	onClose: (id: number) => void;
	onAdd?: () => void;
	onSelected: (id: number) => void;
}

export const ConviTab: React.FC<ConviTabProps> = props => {
	return (
		<ConviTabStyle>
			<ConviTabHeaderStyle>
				{props.children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						selected={props.selected === tabIndex}
						fixed={child.props.fixed}
						onClick={() => props.onSelected(tabIndex)}
						onClose={() => {
							props.onSelected(props.selected - 1 || props.selected + 1);
							props.onClose(tabIndex);
						}}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}

				{props.onAdd && <ConviTabPlusButton onClick={() => props.onAdd!()} />}
			</ConviTabHeaderStyle>

			{props.children[props.selected]}
		</ConviTabStyle>
	);
};
