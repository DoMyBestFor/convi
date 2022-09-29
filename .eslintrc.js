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
	plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'airbnb', 'airbnb/hooks', 'prettier'],
	rules: {
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', 'js', 'jsx'] }],
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
		'import/no-unresolved': 'warn',
		'import/no-named-default': 'warn',
		'import/no-cycle': 'warn',
		'import/prefer-default-export': 'off',
		'prettier/prettier': ['error'],
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		},
	},
};
