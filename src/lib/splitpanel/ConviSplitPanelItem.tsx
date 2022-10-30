import React, { forwardRef } from 'react';
import { ConviSplitPanelItemStyle } from '../style/ConviSplitPanelStyle';

export interface ConviSplitPanelItemProp {
	children: React.ReactNode;
	// eslint-disable-next-line react/require-default-props
	size?: number;
	// eslint-disable-next-line react/require-default-props
	initialSize?: number;
	maxSize?: number;
	minSize?: number;
	dir?: 'col' | 'row';
}

export const ConviSplitPanelItem = forwardRef<React.ReactElement<ConviSplitPanelItemProp>, ConviSplitPanelItemProp>(
	(props: ConviSplitPanelItemProp, ref: any) => {
		const { children, dir = 'col', size, maxSize = Infinity, minSize = 0, initialSize } = props;

		const itemSize = size !== undefined ? size : initialSize; // size가 0일 수도 있음.

		return (
			<ConviSplitPanelItemStyle ref={ref} dir={dir} size={itemSize} maxSize={maxSize} minSize={minSize}>
				{children}
			</ConviSplitPanelItemStyle>
		);
	}
);

ConviSplitPanelItem.defaultProps = {
	dir: 'col',
	maxSize: Infinity,
	minSize: 0,
};

export default ConviSplitPanelItem;
