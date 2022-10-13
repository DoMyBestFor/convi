import styled from 'styled-components';
import tw from 'twin.macro';

export const ConviTabHeaderTitleStyle = styled.span<{ fixed: boolean | undefined }>`
	${tw`overflow-ellipsis overflow-hidden whitespace-nowrap`}
	${props => (props.fixed ? tw`w-full` : tw`w-3/4`)}
`;
