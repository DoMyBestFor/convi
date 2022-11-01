import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicModalPage } from './BasicModalPage';

export default {
	title: 'Modal',
	component: BasicModalPage,
	decorators: [story => <div style={{ width: '10rem', height: '10rem' }}>{story()}</div>],
} as ComponentMeta<typeof BasicModalPage>;

const Template: ComponentStory<typeof BasicModalPage> = args => <BasicModalPage {...args} />;

export const BasicModal = Template.bind({});
BasicModal.args = {
	modalTitle: 'basic modal',
};
