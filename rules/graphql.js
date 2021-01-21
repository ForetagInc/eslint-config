module.exports = {
	rules: {
		'@graphql-eslint/no-deprecated': ['error'],
		'@graphql-eslint/unique-fragment-name': ['error'],
		'@graphql-eslint/unique-operation-name': ['error'],
		'@graphql-eslint/no-hashtag-description': ['error'],
		'@graphql-eslint/no-anonymous-operations':  ['off'],
		'@graphql-eslint/no-operation-name-suffix': ['error'],
		'@graphql-eslint/require-deprecation-reason': ['error'],
		'@graphql-eslint/avoid-operation-name-prefix': ['off'],
		'@graphql-eslint/selection-set-depth': ['off'],
		'@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
		'@graphql-eslint/require-description': ['error'],
		'@graphql-eslint/require-id-when-available': ['off'],
		'@graphql-eslint/description-style': ['error', [{ style: 'block'}]],
		'@graphql-eslint/avoid-duplicate-fields': ['error'],
		'@graphql-eslint/naming-convention': ['off'],
		'@graphql-eslint/input-name': ['warn', [{ checkInputType: true }]],
		
	}
};