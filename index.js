const rules = [
	'./rules/errors',
	'./rules/practices',
	'./rules/variables'
].map(require.resolve)

module.exports = {
	parserOptions: {
		emcaVersion: 2017
	},
	extends: [
		'eslint:recommended',
		'plugin:jest/recommended',
		...rules
	],
	plugins: [
		'jest'
	],
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
		worker: true,
		"shared-node-browser": true,
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