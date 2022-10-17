import React, { ReactNode } from 'react';
import { ConviModalBackdropStyle } from '../style/modal/ConviModalBackdropStyle';
import { ConviModalContentStyle } from '../style/modal/ConviModalContentStyle';
import { ConviModalStyle } from '../style/modal/ConviModalStyle';
import { ConviModalTitlebar } from '../style/modal/ConviModalTitlebar';
import { ConviModalCloseButton } from './ConviModalCloseButton';

interface ConviModalProps {
	open: boolean; // modal open state
	onClose: () => void; // close modal
	preventBackdropClick?: boolean; // prevent click event for backdrop
	children: ReactNode; // children
	title?: ReactNode; // modal title
}

const ConviModal: React.FC<ConviModalProps> = props => {
	const { open, onClose, title, children, preventBackdropClick } = props;
	return (
		<ConviModalStyle open={open}>
			<ConviModalBackdropStyle onMouseDown={() => !preventBackdropClick && onClose()} />
			<ConviModalContentStyle>
				{title && (
					<ConviModalTitlebar>
						{title}
						<ConviModalCloseButton onClick={() => onClose()} />
					</ConviModalTitlebar>
				)}
				{children}
			</ConviModalContentStyle>
		</ConviModalStyle>
	);
};

// default props
ConviModal.defaultProps = {
	preventBackdropClick: false,
	title: 'Modal',
};

export default ConviModal;
