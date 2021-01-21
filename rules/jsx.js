module.exports = {
	rules: {
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

		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-filename-extension': ['warn', { extensions: [ '.jsx', '.tsx' ] }],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-fragments': ['warn', 'syntax'],
		'react/jsx-handler-names': ['off'],
		'react/jsx-indent':  ['warn', 'tab', {
			checkAttributes: true,
			indentLogicalExpressions: true
		}],
		'react/jsx-indent-props': ['warn', 'tab'],
		'react/jsx-max-depth': ['off'],
		'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
		'react/jsx-newline': ['off'],
		'react/jsx-no-bind': ['warn'],
		'react/jsx-no-comment-textnodes': ['error'],
		'react/jsx-no-constructed-context-values': ['error'],
		'react/jsx-no-duplicate-props': ['error'],
		'react/jsx-no-literals': ['off'],
		'react/jsx-no-script-url': ['error'],
		'react/jsx-no-target-blank': ['error'],
		'react/jsx-no-undef': ['error'],
		'react/jsx-no-useless-fragment': ['error'],
		'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
		'react/jsx-pascal-case': ['error'],
		'react/jsx-props-no-spreading': ['off'],
		'react/jsx-sort-default-props': ['off'],
		'react/jsx-sort-props': ['off'],
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never'
		}],
		'react/jsx-uses-react': ['error'],
		'react/jsx-uses-vars': ['error'],
	}
}