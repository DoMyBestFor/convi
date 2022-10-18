/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElementProps } from './ConviTabElement';
import { ConviTabStyle } from '../style/ConviTabStyle';

// Type
export interface ConviUncontrolledTabProps {
	defaultIndex: number;
	forceRender?: boolean;
	children: React.ReactElement<ConviTabElementProps>[];
}

export const ConviUncontrolledTab: React.FC<ConviUncontrolledTabProps> = props => {
	const { defaultIndex, forceRender, children } = props;
	const [selected, setSelected] = useState<number>(defaultIndex);

	return (
		<ConviTabStyle>
			<div>
				{children.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
					<ConviTabHeaderElement
						key={`${child.props.title}-${tabIndex * 1}`}
						index={tabIndex}
						selected={selected === tabIndex}
						onTabTitleChange={() => null}
						fixed={child.props.fixed || defaultIndex !== undefined}
						onSelected={(index: number) => setSelected(index)}
						onClose={() => null}
						onHeaderDrag={(e: any) => console.log(e)}
						onHeaderDragEnd={(e: any) => console.log(e)}
					>
						{child.props.title}
					</ConviTabHeaderElement>
				))}
			</div>

			{!forceRender
				? children.map((child, index) => (
						<span
							key={`${child.props.title}-${index * 1}`}
							css={css`
								visibility: ${selected === index ? 'visible' : 'hidden'};
							`}
						>
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

export default ConviUncontrolledTab;
