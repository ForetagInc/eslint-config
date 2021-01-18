const rules = require('./source/index');

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:cypress/recommended',
		'plugin:jest/recommended',
	],
	plugins: [
		'@graphql-eslint',
		'@typescript-eslint',
		'react-native',
		'cypress',
		'jest'
	],
	parserOptions: {
		emcaVersion: 12,
		emcaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		es2021: true,
		worker: true,
		"shared-node-browser": true,
		"react-native/react-native": true
	},
	rules: rules
};