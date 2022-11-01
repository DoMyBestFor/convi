import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab, TabElement } from '../../../src/lib';
import { Input } from '../Input';

export default {
	title: 'Tab',
	component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = args => <Tab {...args} />;

export const BasicTab = Template.bind({});
BasicTab.args = {
	children: [
		<TabElement title="test1">
			<div>drag please, I am test1</div>
		</TabElement>,
		<TabElement title="test2">
			<div>drag please, I am test2</div>
		</TabElement>,
		<TabElement title="test3">
			<div>drag please, I am test3</div>
		</TabElement>,
	],
};

export const ChangeTitleTab = Template.bind({});
ChangeTitleTab.args = {
	ableChangeTitle: true,
	children: [
		<TabElement title="editable">
			<div>double click on tab header!!</div>
		</TabElement>,
	],
};

export const ForceRenderTab = Template.bind({});
ForceRenderTab.args = {
	forceRender: true,
	children: [
		<TabElement title="render1">
			<Input />
		</TabElement>,
		<TabElement title="render2">
			<div>forceRender props를 바꿔가면서 render1 탭의 text 상태가 유지되는지 확인하세요.</div>
		</TabElement>,
	],
};

export const AddTab = Template.bind({});
AddTab.args = {
	onAdd: () => console.log('add'),
	children: [
		<TabElement title="add test">
			<div>add test1</div>
		</TabElement>,
		<TabElement title="add test2">
			<div>add test2</div>
		</TabElement>,
	],
};

export const ArrowScrollTab = Template.bind({});
ArrowScrollTab.args = {
	children: [
		<TabElement title="test1">
			<div>drag please, I am test1</div>
		</TabElement>,
		<TabElement title="test2">
			<div>drag please, I am test2</div>
		</TabElement>,
		<TabElement title="test3">
			<div>drag please, I am test3</div>
		</TabElement>,
		<TabElement title="test4">
			<div>drag please, I am test4</div>
		</TabElement>,
		<TabElement title="test5">
			<div>drag please, I am test5</div>
		</TabElement>,
		<TabElement title="test6">
			<div>drag please, I am test6</div>
		</TabElement>,
		<TabElement title="test7">
			<div>drag please, I am test7</div>
		</TabElement>,
		<TabElement title="test8">
			<div>drag please, I am test8</div>
		</TabElement>,
		<TabElement title="test9">
			<div>drag please, I am test9</div>
		</TabElement>,
		<TabElement title="test10">
			<div>drag please, I am test10</div>
		</TabElement>,
		<TabElement title="test11">
			<div>drag please, I am test11</div>
		</TabElement>,
		<TabElement title="test12">
			<div>drag please, I am test12</div>
		</TabElement>,
		<TabElement title="test13">
			<div>drag please, I am test13</div>
		</TabElement>,
		<TabElement title="test14">
			<div>drag please, I am test14</div>
		</TabElement>,
		<TabElement title="test15">
			<div>drag please, I am test15</div>
		</TabElement>,
	],
};
