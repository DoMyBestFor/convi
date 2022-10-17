import React, { HTMLAttributes, useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElementProps } from './ConviTabElement';
import { ConviTabHeaderStyle } from '../../style/tab/ConviTabHeaderStyle';
import { ConviTabStyle } from '../../style/tab/ConviTabStyle';

// Type
interface ConviUncontrolledTabProps extends HTMLAttributes<HTMLDivElement> {
	defaultIndex: number;
	forceRender?: boolean;
	children: React.ReactElement<ConviTabElementProps>[];
}

export const ConviUncontrolledTab: React.FC<ConviUncontrolledTabProps> = props => {
	const { defaultIndex, forceRender, children, ...divProps } = props;
	const [selected, setSelected] = useState<number>(defaultIndex);

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ConviTabStyle {...divProps}>
			<ConviTabHeaderStyle>
				{children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						key={`${child.props.title}-${tabIndex * 1}`}
						index={tabIndex}
						selected={selected === tabIndex}
						onTabTitleChange={() => null}
						fixed={child.props.fixed || defaultIndex !== undefined}
						onSelected={(index: number) => setSelected(index)}
						onClose={() => null}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}
			</ConviTabHeaderStyle>

			{forceRender
				? children.map((child, index) => (
						<span key={`${child.props.title}-${index * 1}`} className={`${selected === index ? 'inline' : 'hidden'}`}>
							{child}
						</span>
				  ))
				: children[selected]}
		</ConviTabStyle>
	);
};

// default Props
ConviUncontrolledTab.defaultProps = {
	forceRender: false,
};
