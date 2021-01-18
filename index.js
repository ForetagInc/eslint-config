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
	parser: '@typescript-eslint/parser',
	parserOptions: {
		emcaVersion: 12,
		emcaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:cypress/recommended',
		'plugin:jest/recommended',
		...rules
	],
	plugins: [
		'@graphql-eslint',
		'@typescript-eslint',
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
	rules: {}
}