import React, { HTMLAttributes } from 'react';

// Convi Tab Element에 들어갈 content는 원하는 style로 변경하고 싶을 경우가 많음.
export interface ConviTabElementProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	fixed?: boolean;
	children: React.ReactElement;
}

export const ConviTabElement: React.FC<ConviTabElementProps> = props => {
	const { title, fixed, children, ...divProps } = props;
	return <div {...divProps}>{children}</div>;
};
