import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabElement, UncontrolledTab } from '../../src/lib';

export default {
	title: 'Uncontrolled Tab',
	component: UncontrolledTab,
} as ComponentMeta<typeof UncontrolledTab>;

const Template: ComponentStory<typeof UncontrolledTab> = args => <UncontrolledTab {...args} />;

export const UncontrolledTabs = Template.bind({});
UncontrolledTabs.args = {
	defaultIndex: 0,
	children: [
		<TabElement title="test1">
			<div>uncontrolled tab 1</div>
		</TabElement>,
		<TabElement title="test2">
			<div>uncontrolled tab 2</div>
		</TabElement>,
	],
};
