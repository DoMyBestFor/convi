import React, { useState } from 'react';
import { Tab, TabElement } from '../../src/index';
import { ConviTabProps } from '../../src/lib/tab/ConviTab';
import { ConviTabElementProps } from '../../src/lib/tab/ConviTabElement';

export const TabPage: React.FC<ConviTabProps> = props => {
	const { ableChangeTitle, draggableTab, forceRender, children, onAdd } = props;
	const [selected, setSelected] = useState<number>(0);
	const [tabElements, setTabElements] = useState<React.ReactElement<ConviTabElementProps>[]>(children);

	const onAddHandler = () => {
		setTabElements([
			...tabElements,
			<TabElement title="hello">
				<div>hello</div>
			</TabElement>,
		]);
	};

	return (
		<Tab
			ableChangeTitle={ableChangeTitle}
			draggableTab={draggableTab}
			forceRender={forceRender}
			onAdd={onAdd === undefined ? onAdd : onAddHandler}
			selected={selected}
			onSelected={index => setSelected(index)}
			onClose={index => setTabElements([...tabElements.filter((_, tabIndex) => tabIndex !== index)])}
			onTabPositionChange={currentTabs => setTabElements(currentTabs)}
		>
			{tabElements}
		</Tab>
	);
};
