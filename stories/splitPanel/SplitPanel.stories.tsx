import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SplitPanel, SplitPanelItem } from '../../src/lib';

export default {
	title: 'SplitPanel',
	component: SplitPanel,
	decorators: [story => <div style={{ width: '250px', height: '250px', border: '1px solid black' }}>{story()}</div>],
} as ComponentMeta<typeof SplitPanel>;

const Template: ComponentStory<typeof SplitPanel> = args => <SplitPanel {...args} />;

export const BasicSplit = Template.bind({});
BasicSplit.args = {
	children: [
		<SplitPanelItem initialSize={100}>test1</SplitPanelItem>,
		<SplitPanelItem initialSize={150}>test2</SplitPanelItem>,
	],
};

export const MultiSplit = Template.bind({});
MultiSplit.args = {
	children: [
		<SplitPanelItem initialSize={50}>test1</SplitPanelItem>,
		<SplitPanelItem initialSize={50}>test2</SplitPanelItem>,
		<SplitPanelItem initialSize={50}>test3</SplitPanelItem>,
	],
};

export const NestedSplit = Template.bind({});
NestedSplit.args = {
	dir: 'col',
	children: [
		<SplitPanelItem initialSize={50}>test1</SplitPanelItem>,
		<SplitPanelItem>
			<SplitPanel dir="row">
				<SplitPanelItem initialSize={50}>test2</SplitPanelItem>
				<SplitPanelItem initialSize={50}>test3</SplitPanelItem>
			</SplitPanel>
		</SplitPanelItem>,
	],
};

export const MinMaxSplit = Template.bind({});
MinMaxSplit.args = {
	children: [
		<SplitPanelItem minSize={50} initialSize={100}>
			min size: 50
		</SplitPanelItem>,
		<SplitPanelItem maxSize={150} initialSize={100}>
			max size: 150
		</SplitPanelItem>,
		<SplitPanelItem initialSize={50}>no limited</SplitPanelItem>,
	],
};
