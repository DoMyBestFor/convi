/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState, useEffect } from 'react';
import { editStyle, nonEditStyle } from '../style/ConviTabStyle';

export const useTabTitles = (title: string, onTabTitleChange: (newTitle: string) => void, ableChangeTitle: boolean) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [tabTitle, setTabTitle] = useState<string>(title);

	useEffect(() => {
		setTabTitle(title);
	}, [title]);

	const handleDoubleClick = () => setEditMode(true);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTabTitle(e.target.value);

	return {
		titleContent: () =>
			editMode && ableChangeTitle ? (
				<input
					css={editStyle}
					value={tabTitle}
					onChange={handleChange}
					onBlur={e => {
						onTabTitleChange(e.target.value);
						setEditMode(false);
					}}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							onTabTitleChange(e.currentTarget.value);
							setEditMode(false);
						}
					}}
				/>
			) : (
				<span css={nonEditStyle} onDoubleClick={handleDoubleClick}>
					{tabTitle}
				</span>
			),
	};
};
