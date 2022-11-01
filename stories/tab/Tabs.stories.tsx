import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from '../../src/lib';
import { TabPage } from './TabPage';
import { AddTab, ArrowScrollTab, BasicTab, ChangeTitleTab, ForceRenderTab } from './basic-stories/Tab.stories';

export default {
	title: 'Tab',
	component: TabPage,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = args => <TabPage {...args} />;

export const DraggableTabs = Template.bind({});
DraggableTabs.args = {
	onAdd: undefined,
	children: BasicTab.args.children,
};

export const ChangeTitleTabs = Template.bind({});
ChangeTitleTabs.args = {
	onAdd: undefined,
	ableChangeTitle: ChangeTitleTab.args.ableChangeTitle,
	children: ChangeTitleTab.args.children,
};

export const ForceRenderTabs = Template.bind({});
ForceRenderTabs.args = {
	onAdd: undefined,
	forceRender: ForceRenderTab.args.forceRender,
	children: ForceRenderTab.args.children,
};

export const AddTabs = Template.bind({});
AddTabs.args = {
	onAdd: AddTab.args.onAdd,
	children: AddTab.args.children,
};

export const ArrowScrollTabs = Template.bind({});
ArrowScrollTabs.args = {
	children: ArrowScrollTab.args.children,
};
