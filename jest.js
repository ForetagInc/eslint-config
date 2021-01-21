module.exports = {
	extends:  [
		'./index.js',
		'plugin:jest/all',
	],
	plugins: [
		'jest'
	],
	env: {
		jest: true,
		"jest/globals": true
	}
}