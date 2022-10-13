import { AiFillPlusCircle } from 'react-icons/ai';
import React, { HTMLAttributes, SetStateAction, useRef, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElement, ConviTabElementProps } from './ConviTabElement';
import { ConviTabHeaderStyle } from '../style/tab/ConviTabHeaderStyle';
import { ConviTabStyle } from '../style/tab/ConviTabStyle';

interface ConviTabProps extends HTMLAttributes<HTMLDivElement> {
	selected: number;
	children: React.ReactElement<ConviTabElementProps>[];
	setElements: any;
	onClose: (id: number) => void;
	add?: React.ReactElement<ConviTabElementProps>;
	onSelected: (id: number) => void;
}

export const ConviTab: React.FC<ConviTabProps> = props => {
	const [tabElements, setTabElements] = useState<React.ReactElement<ConviTabElementProps>[]>(props.children);
	return (
		<ConviTabStyle>
			<ConviTabHeaderStyle>
				{tabElements.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
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

				{props.add && (
					<AiFillPlusCircle
						className="mt-auto mb-1 cursor-pointer"
						onClick={() => {
							props.setElements((prevTabElements: any) => {
								props.onSelected(prevTabElements.length);
								return [
									...props.children,
									<ConviTabElement
										title={`Untitled-${
											props.children
												.filter(element => {
													// eslint-disable-next-line prefer-regex-literals
													const regex = new RegExp(/Untitled-[0-9]+/g);
													return regex.test(element.props.title);
												})
												.map(element => Number(element.props.title.split('-')[1]))
												.reduce((prev: number, cur: number) => Math.max(prev, cur), -1) + 1
										}`}
									>
										<div>{props.add!}</div>
									</ConviTabElement>,
								];
							});
						}}
					/>
				)}
			</ConviTabHeaderStyle>

			{props.children[props.selected]}
		</ConviTabStyle>
	);
};
