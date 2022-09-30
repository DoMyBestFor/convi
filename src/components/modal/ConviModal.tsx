import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlineClose } from 'react-icons/ai';
import { ConviModalBackdropStyle } from './ConviModalBackdropStyle';
import { ConviModalContentStyle } from './ConviModalContentStyle';
import { ConviModalTitlebar } from './ConviModalTitlebar';
import { ConviModalStyle } from './ConviModalStyle';

const ConviModalCloseButton = styled(AiOutlineClose)`
	${tw`ml-auto mb-auto mt-auto cursor-pointer hover:text-red-500`}
`;

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
