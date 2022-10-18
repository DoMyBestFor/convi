/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { ConviModalCloseButton } from './ConviModalCloseButton';
import { ConviModalStyle, ConviModalTitle } from '../style/ConviModalStyle';

interface ConviModalProps {
	open: boolean; // modal open state
	onClose: () => void; // close modal
	preventBackdropClick?: boolean; // prevent click event for backdrop
	children: ReactNode; // children
	title: ReactNode; // modal title
}

export const ConviModal: React.FC<ConviModalProps> = props => {
	const { open, onClose, title, children, preventBackdropClick } = props;
	return (
		<ConviModalStyle open={open}>
			{
				// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
				<div role="document" onMouseDown={() => !preventBackdropClick && onClose()} />
			}
			<div>
				<div css={ConviModalTitle}>
					{title}
					<ConviModalCloseButton onClick={() => onClose()} />
				</div>
				{children}
			</div>
		</ConviModalStyle>
	);
};

// default props
ConviModal.defaultProps = {
	preventBackdropClick: false,
};

export default ConviModal;
