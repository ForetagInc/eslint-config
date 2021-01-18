const rules = [
	'./rules/errors',
	'./rules/graphql',
	'./rules/jsx',
	'./rules/practices',
	'./rules/react',
	'./rules/react-native',
	'./rules/variables'
].map(require.resolve)

module.exports = {
	parserOptions: {
		emcaVersion: 12,
		emcaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:cypress/recommended',
		'plugin:jest/recommended',
		...rules
	],
	plugins: [
		'@graphql-eslint',
		'react',
		'react-native',
		'cypress',
		'jest'
	],
	env: {
		browser: true,
		node: true,
		jest: true,
		worker: true,
		"shared-node-browser": true,
		"react-native/react-native": true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {},
	overrides: [
		{
			files: [
				"**/*.ts", 
				"**/*.tsx"
			],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
			],
			rules: {
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': ['error']
			}
		}
	]
}