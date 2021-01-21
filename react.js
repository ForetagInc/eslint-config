const rules = [
	'./rules/jsx',
	'./rules/react',
].map(require.resolve)

module.exports = {
	extends: [
		'./index.js',
		'plugin:react/recommended',
		...rules
	],
	plugins: [
		'react',
	],
	parserOptions: {
		emcaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
}