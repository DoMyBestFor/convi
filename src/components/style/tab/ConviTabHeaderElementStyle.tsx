import styled from 'styled-components';
import tw from 'twin.macro';

export const ConviTabHeaderElementStyle = styled.span<{ selected: boolean }>`
	${tw`flex gap-3 mt-auto text-sm pl-3 pr-3 mr-3 rounded-tl-lg rounded-tr-lg cursor-pointer`}
	${props => (props.selected ? tw`bg-white` : tw`bg-gray-200`)}
	max-width: 10%;
`;
