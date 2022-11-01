import React, { useState } from 'react';
import { Modal } from '../../src/lib';
import { ConviModalProps } from '../../src/lib/modal/ConviModal';

export interface BasicModalPageProps extends ConviModalProps {
	/**
	 * modal style's width property
	 */
	// eslint-disable-next-line react/require-default-props
	width?: string;
	/**
	 * modal style's height property
	 */
	// eslint-disable-next-line react/require-default-props
	height?: string;
}

export const BasicModalPage: React.FC<BasicModalPageProps> = props => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				basic modal
			</button>
			<Modal
				open={open}
				// eslint-disable-next-line react/destructuring-assignment
				style={{ width: `${props.width}`, height: `${props.height}` }}
				onClose={() => setOpen(false)}
				// eslint-disable-next-line react/destructuring-assignment
				modalTitle={props.modalTitle}
				// eslint-disable-next-line react/destructuring-assignment
				preventBackdropClick={props.preventBackdropClick}
			>
				<div>basic modal test</div>
			</Modal>
		</>
	);
};
