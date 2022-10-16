import React, { ReactNode } from 'react';
import { ConviModalBackdropStyle } from '../../style/modal/ConviModalBackdropStyle';
import { ConviModalContentStyle } from '../../style/modal/ConviModalContentStyle';
import { ConviModalStyle } from '../../style/modal/ConviModalStyle';
import { ConviModalTitlebar } from '../../style/modal/ConviModalTitlebar';
import { ConviModalCloseButton } from './ConviModalCloseButton';

interface ConviModalProps {
	open: boolean; // modal open state
	onClose: () => void; // close modal
	preventBackdropClick?: boolean; // prevent click event for backdrop
	children?: ReactNode; // children
	title?: ReactNode; // modal title
}

export const ConviModal: React.FC<ConviModalProps> = props => {
	return (
		<ConviModalStyle open={props.open}>
			<ConviModalBackdropStyle onMouseDown={() => !props.preventBackdropClick && props.onClose()} />
			<ConviModalContentStyle>
				{props.title && (
					<ConviModalTitlebar>
						{props.title}
						<ConviModalCloseButton onClick={() => props.onClose()} />
					</ConviModalTitlebar>
				)}
				{props.children}
			</ConviModalContentStyle>
		</ConviModalStyle>
	);
};

// default props
ConviModal.defaultProps = {
	preventBackdropClick: false,
};
