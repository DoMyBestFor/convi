import { AiOutlinePlus } from 'react-icons/ai';
import tw from 'twin.macro';
import styled from 'styled-components';
import React, { HTMLAttributes, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElementProps } from './ConviTabElement';
import { ConviTabHeaderStyle } from '../../style/tab/ConviTabHeaderStyle';
import { ConviTabStyle } from '../../style/tab/ConviTabStyle';

const ConviTabPlusButton = styled(AiOutlinePlus)`
	${tw`mt-auto mb-1 cursor-pointer hover:text-gray-500`}
`;

interface ConviTabProps extends HTMLAttributes<HTMLDivElement> {
	defaultIndex: number;
	selected?: number;
	ableChangeTitle?: boolean;
	forceRender?: boolean;
	children: React.ReactElement<ConviTabElementProps>[];
	onClose: (id: number) => void;
	onAdd?: () => void;
	onSelected: (id: number) => void;
}

/* < assertion 사용의 근거 >
	사용자 입장에서 tab select state 제어권을 어디에 둘 지 무조건 지정 해줘야 한다.
	props.selected 지정 - tab 외부
	defaultIndex 지정 - tab 내부
	이므로 정상적인 Tab 사용시 selectedIndex는 무조건 undefined가 아님.
*/
const useSelect = (onSelected: (id: number) => void, outer?: number, inner?: number) => {
	const [selected, setSelected] = useState<number | undefined>(outer === undefined ? inner : outer);

	return {
		selectedTab: selected,
		changeTab: outer === undefined ? setSelected : onSelected,
	};
};
export const ConviTab: React.FC<ConviTabProps> = props => {
	const { selectedTab, changeTab } = useSelect(props.onSelected, props.selected, props.defaultIndex);
	return (
		<ConviTabStyle>
			<ConviTabHeaderStyle>
				{props.children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						selected={selectedTab === tabIndex}
						ableChangeTitle={props.ableChangeTitle}
						fixed={child.props.fixed || props.defaultIndex !== undefined}
						onClick={() => changeTab(tabIndex)}
						onClose={() => {
							changeTab(selectedTab! - 1 || selectedTab! + 1);
							props.onClose(tabIndex);
						}}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}

				{props.onAdd && <ConviTabPlusButton onClick={() => props.onAdd!()} />}
			</ConviTabHeaderStyle>

			{props.forceRender
				? selectedTab !== undefined &&
				  props.children.map((child, index) => (
						<span className={`${selectedTab === index ? 'inline' : 'hidden'}`}>{child}</span>
				  ))
				: selectedTab !== undefined && props.children[selectedTab]}
		</ConviTabStyle>
	);
};

ConviTab.defaultProps = {
	ableChangeTitle: false,
	forceRender: false,
};
