module.exports = {

	'react/jsx-boolean-value': [
		'error',
		'never'
	],

	'react/jsx-child-element-spacing': 'warn',

	'react/jsx-closing-bracket-location': [
		'warn',
		'line-aligned',
	],

	'react/jsx-closing-tag-location': 'warn',

	'react/jsx-curly-newline': [
		'warn', {
			'multiline': 'consistent',
			'singleline': 'consistent'
		}
	],

	'react/jsx-curly-spacing': [
		'warn', {
			'when': 'always',
			'children': true,
			'allowMultiline': true,
			'spacing': {
				'objectLiterals': 'never'
			}
		}
	],

}