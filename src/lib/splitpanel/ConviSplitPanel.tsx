import React, { HTMLAttributes } from 'react';

import { ConviSplitPanelItem } from './ConviSplitPanelItem';
import { ConviSplitPanelStyle } from '../style/ConviSplitPanelStyle';

export interface ConviSplitPanelProp extends HTMLAttributes<HTMLDivElement> {
	initialSizes?: { [key: number]: number };
	children: React.ReactNode[];
	dir?: 'col' | 'row';
}

export const ConviSplitPanel: React.FC<ConviSplitPanelProp> = (props: ConviSplitPanelProp) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, dir = 'col', initialSizes, ...divProps } = props;

	const indexesForInitialSizes: string[] = initialSizes ? Object.keys(initialSizes) : [];
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ConviSplitPanelStyle dir={dir} {...divProps}>
			{children.map((child: React.ReactNode, index: number) => (
				<ConviSplitPanelItem
					key={`${dir}-${1 * index}`}
					hasResizer={index !== children.length - 1}
					dir={dir}
					initialSize={
						indexesForInitialSizes.includes(index.toString()) && initialSizes ? initialSizes[index] : undefined
					}
				>
					{child}
				</ConviSplitPanelItem>
			))}
		</ConviSplitPanelStyle>
	);
};

ConviSplitPanel.defaultProps = {
	dir: 'col',
	initialSizes: {},
};

export default ConviSplitPanel;
