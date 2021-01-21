const rules = [
	'./rules/react-native',
].map(require.resolve)

module.exports = {
	extends: [
		'./react.js',
		...rules
	],
	plugins: [
		'react-native',
	],
	env: {
		"react-native/react-native": true
	}
}