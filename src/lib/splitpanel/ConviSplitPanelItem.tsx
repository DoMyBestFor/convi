/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';
import { panelItemStyle } from '../../style/ConviSplitPanelStyle';

export interface ConviSplitPanelItemProp {
	children: React.ReactNode;
	isGrow?: boolean;
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
		const { children, dir = 'col', size, maxSize = Infinity, minSize = 0, initialSize, isGrow = false } = props;

		const itemSize = size !== undefined ? size : initialSize; // size가 0일 수도 있음.

		return (
			<div css={panelItemStyle(dir, isGrow, minSize, maxSize, itemSize)} ref={ref}>
				{children}
			</div>
		);
	}
);

ConviSplitPanelItem.defaultProps = {
	dir: 'col',
	maxSize: Infinity,
	minSize: 0,
	isGrow: false,
};

export default ConviSplitPanelItem;
