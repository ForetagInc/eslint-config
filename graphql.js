const rules = [
	'./rules/graphql'
].map(require.resolve)

module.exports = {
	extends: [
		'./index.js',
		...rules
	],
	plugins: [
		'@graphql-eslint',
	]
}