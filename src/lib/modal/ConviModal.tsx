/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from 'react';
import { ConviModalCloseButton } from './ConviModalCloseButton';
import { modalBackdropStyle, modalContentStyle, modalStyle, modalTitleStyle } from '../../style/ConviModalStyle';

export interface ConviModalProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * modal open state
	 */
	open: boolean;
	/**
	 * modal close handler
	 */
	onClose: () => void;
	/**
	 * prevent back drop click event
	 */
	preventBackdropClick?: boolean; // prevent click event for backdrop
	/**
	 * modal content
	 */
	// eslint-disable-next-line react/require-default-props
	children?: React.ReactElement<HTMLElement>;
	/**
	 * modal title
	 */
	modalTitle: ReactNode;
}

/**
 * Convi Modal Component
 */
export const ConviModal: React.FC<ConviModalProps> = props => {
	const { open, onClose, modalTitle, children, preventBackdropClick, ...divProps } = props;
	return (
		<div css={modalStyle(open)}>
			{
				// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
				<div css={modalBackdropStyle} role="document" onMouseDown={() => !preventBackdropClick && onClose()} />
			}
			{
				// eslint-disable-next-line react/jsx-props-no-spreading
				<div css={modalContentStyle} {...divProps}>
					<div css={modalTitleStyle}>
						{modalTitle}
						<ConviModalCloseButton onClick={() => onClose()} />
					</div>
					{children}
				</div>
			}
		</div>
	);
};

// default props
ConviModal.defaultProps = {
	preventBackdropClick: false,
};

export default ConviModal;
