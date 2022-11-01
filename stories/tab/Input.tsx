import React, { useState } from 'react';

export const Input: React.FC = () => {
	const [text, setText] = useState<string>();

	return <input value={text} onChange={e => setText(e.target.value)} />;
};
