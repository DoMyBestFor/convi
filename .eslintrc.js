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
		'no-unused-vars': 'warn',

		'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', 'js', 'jsx'] }],
		'react/destructuring-assignment': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-unused-prop-types': 'off',
		'react/prop-types': 'off',
		'react/require-default-props': 'warn',
		'react/function-component-definition': 'off',
		'react/no-children-prop': 'warn',
		'react/jsx-props-no-spreading': 'warn',
		'react/no-array-index-key': 'warn',
		'react/jsx-no-useless-fragment': 'warn',
		'react/no-unstable-nested-components': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'react/default-props-match-prop-types': 'warn',

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
