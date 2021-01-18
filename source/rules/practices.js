module.exports = {
	'accessor-pairs': [
		'error', 
		{
			'setWithoutget': true,
			'getWithoutSet': false
		}
	],
	'array-callback-return': 'warn',
	'block-scoped-var': 'error',
	'class-methods-use-this': 'error',
	'complexity': ['error', 4],
	'consistent-return': [
		'error',
		{
			'treatUndefinedAsUnspecified': true
		}
	],
	'curly': ['error', 'multi-or-nest'],
	'default-case': [
		'error', 
		{ 
			'commentPattern': '^skip\\sdefault' 
		}
	],
	'dot-location': ['error', 'object'],
	'dot-notation': 'error',
	'eqeqeq': ['error', 'smart'],
	'guard-for-in': 'error',
	'max-classes-per-file': 'error',
	'no-alert': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'off',
	'no-div-regex': 'error',
	'no-else-return': [
		'error', 
		{ 
			allowElseIf: true 
		}
	],
	'no-empty-function': 'error',
	'no-empty-pattern': 'off',
	'no-eq-null': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-label': 'error',
	'no-fallthrough': [
		'error', 
		{ 
			'commentPattern': 'break[\\s\\w]*omitted' 
		}
	],
	'no-floating-decimal': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': [
		'error', 
		{ 
			'parserOptions': { 
				'sourceType': 'module' 
			}
		}
	],
	'no-implied-eval': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-labels': 'off',
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-magic-numbers': 'off',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'warn',
	'no-new-func': 'warn',
	'no-new-wrappers': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': 'error',
	'no-proto': 'error',
	'no-redeclare': 'error',
	'no-return-assign': 'error',
	'no-return-await': 'error',
	'no-script-url': 'error',
	'no-self-assign': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'off',
	'no-unused-expressions': 'off',
	'no-unused-labels': 'error',
	'no-useless-call': 'warn',
	'no-useless-catch': 'error',
	'no-useless-concat': 'error',
	'no-useless-escape': 'error',
	'no-useless-return': 'error',
	'no-void': 'error',
	'no-warning-comments': 'warn',
	'no-with': 'error',
	'prefer-named-capture-group': 'error',
	'prefer-promise-reject-errors': 'error',
	'radix': 'error',
	'require-await': 'error',
	'require-unicode-regexp': 'warn',
	'vars-on-top': 'error',
	'wrap-iife': ['error', 'outside'],
	'yoda': 'error'
}