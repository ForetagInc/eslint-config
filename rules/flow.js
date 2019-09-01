module.exports.rules = {

	'flowtype/boolean-style': [
		2,
		'boolean'
	],

	'flowtype/define-flow-type': 'warn',

	'flowtype/delimiter-dangle': 'always-multiline',

	'flowtype/generic-spacing': 'never',

	'flowtype/no-mixed': 'off',

	'flowtype/no-primitive-constructor-types': 'error',

	'flowtype/no-types-missing-file-annotation': 'error',

	'flowtype/no-weak-types': [
		'off', 
		{
			'any': false
		}
	],

	'flowtype/object-type-delimiter': [
		'error',
		'comma'
	],

	'flowtype/require-parameter-type': [
		'error',
		{
			'excludeArrowFunctions': 'expressionsOnly'
		}
	],

	'flowtype/require-readonly-react-props': 'error',

	'flowtype/require-return-type': [
		'error',
		'always',
		{
			'excludeArrowFunctions': 'expressionsOnly'
		}
	],

	'flowtype/require-valid-file-annotation': [
		'warn',
		'always', {
			'annotationStyle': 'line',
			'strict': false
		}
	],

	'flowtype/semi': [
		'error',
		'never'
	],

	'flowtype/space-after-type-colon': [
		'error',
		'always', {
			'allowLineBreak': true
		}
	],

	'flowtype/space-before-generic-bracket': [
		'error',
		'always'
	],

	'flowtype/space-before-type-colon': [
		'error',
		'never'
	],

	'flowtype/type-id-match': 'off',

	'flowtype/type-import-style': [
		'error',
		'declaration'
	],

	'flowtype/union-intersection-spacing': [
		'error',
		'always'
	],

	'flowtype/use-flow-type': 'warn',

	'flowtype/valid-syntax': 'warn'
}