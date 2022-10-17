/* eslint-disable prettier/prettier */
module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react', 'tailwindcss', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'airbnb', 'airbnb/hooks', 'prettier'],
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', 'js', 'jsx'] }],
		'react/function-component-definition': ['error', { "namedComponents": 'arrow-function', "unnamedComponents": 'arrow-function' }], // arrow function

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],

		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off',

		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',

		'tailwindcss/classnames-order': 'error',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		},
	},
};
