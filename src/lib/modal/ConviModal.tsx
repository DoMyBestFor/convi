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
	width?: string; // modal width
	height?: string; // modal height
}

export const ConviModal: React.FC<ConviModalProps> = props => {
	const { open, onClose, title, children, preventBackdropClick, width = 'auto', height = 'auto' } = props;
	return (
		<ConviModalStyle open={open} width={width} height={height}>
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
	width: 'auto',
	height: 'auto',
};

export default ConviModal;
