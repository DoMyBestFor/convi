/** @jsxImportSource @emotion/react */
import React from 'react';
import { ConviTabArrowButton } from './ConviTabArrowButton';

export const ConviTabScrollButton: React.FC<{
	headerElement: HTMLDivElement | null;
	scrollLocation: number;
}> = props => {
	const { headerElement, scrollLocation } = props;

	const move = headerElement ? headerElement.scrollWidth / headerElement.childElementCount : 20;
	return (
		<div>
			<span>
				<ConviTabArrowButton
					direction="left"
					scrollLocation={scrollLocation}
					onClick={() => headerElement?.scrollBy(-move, 0)}
				/>
			</span>
			<span>
				<ConviTabArrowButton
					direction="right"
					scrollLocation={-scrollLocation}
					onClick={() => headerElement?.scrollBy(move, 0)}
				/>
			</span>
		</div>
	);
};
