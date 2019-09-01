module.exports.rules = {

	'react/display-name': [
		'warn', {
			'ignoreTranspilerName': true
		}
	],

	'react/no-typos': 'error',

	'react/no-string-refs': [
		'error', {
			'noTemplateLiterals': true
		}
	],

	'react/no-this-in-sfc': 'error',

	'react/no-unescaped-entities': 'error',

	'react/no-unknown-property': 'warn',

	'react/no-unsafe': 'error',

	'react/no-unused-prop-types': 'warn',

	'react/no-unused-state': 'warn',

	'react/no-will-update-set-state': [
		'error',
		'disallow-in-func'
	]

	'react/prefer-es6-class': [
		'error',
		'always'
	]
}