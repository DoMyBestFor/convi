import React, { forwardRef, useEffect, useState } from 'react';
import { ConviSplitPanelItemStyle } from '../style/ConviSplitPanelStyle';

export interface ConviSplitPanelItemProp {
	children: React.ReactNode;
	size: number;
	dir?: 'col' | 'row';
}

export const ConviSplitPanelItem = forwardRef<React.ReactElement<ConviSplitPanelItemProp>, ConviSplitPanelItemProp>(
	(props: ConviSplitPanelItemProp, ref: any) => {
		const { children, dir = 'col', size } = props;
		console.log('rerender');
		console.log(size);

		return (
			<ConviSplitPanelItemStyle ref={ref} dir={dir} size={size}>
				{children}
			</ConviSplitPanelItemStyle>
		);
	}
);

ConviSplitPanelItem.defaultProps = {
	dir: 'col',
};

export default ConviSplitPanelItem;
