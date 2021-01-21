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
	],
	overrides: [
		{
			files: [
				'*.tsx',
				'*.ts'
			],
			processor: '@graphql-eslint/graphql',
		},
		{
			files: [
				'*.graphql',
				'*gql'
			],
			plugins: [
				'@graphql-eslint'
			],
			parser: '@graphql-eslint/eslint-graphql',
			parserOptions: {
				operations: './source/**/*.graphql',
				schema: './graphql/schema.graphql'
			}
		}
	]
}