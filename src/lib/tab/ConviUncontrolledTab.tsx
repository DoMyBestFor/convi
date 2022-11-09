/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ConviTabHeaderElement } from './ConviTabHeaderElement';
import { ConviTabElementProps } from './ConviTabElement';
import { ConviTabStyle } from '../../style/ConviTabStyle';

// Type
export interface ConviUncontrolledTabProps {
	defaultIndex: number;
	forceRender?: boolean;
	children: React.ReactElement<ConviTabElementProps> | React.ReactElement<ConviTabElementProps>[];
}

export const ConviUncontrolledTab: React.FC<ConviUncontrolledTabProps> = props => {
	const { defaultIndex, forceRender, children } = props;
	const [selected, setSelected] = useState<number>(defaultIndex);

	const tabElements: React.ReactElement<ConviTabElementProps>[] = Array.isArray(children) ? children : [children];

	return (
		<ConviTabStyle>
			<div className="header">
				<div className="tabList">
					{tabElements.map((child: React.ReactElement<ConviTabElementProps>, tabIndex: number) => (
						<ConviTabHeaderElement
							key={`${child.props.title}-${tabIndex * 1}`}
							index={tabIndex}
							selected={selected === tabIndex}
							icon={child.props.frontIcon}
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
			</div>

			{!forceRender
				? tabElements.map((child, index) => (
						<span
							key={`${child.props.title}-${index * 1}`}
							css={css`
								display: ${selected === index ? 'inline' : 'none'};
							`}
						>
							{child}
						</span>
				  ))
				: tabElements[selected]}
		</ConviTabStyle>
	);
};

// default Props
ConviUncontrolledTab.defaultProps = {
	forceRender: false,
};

export default ConviUncontrolledTab;
