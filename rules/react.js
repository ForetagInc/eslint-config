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

	'react/no-this-in-sfc': 'error'

}