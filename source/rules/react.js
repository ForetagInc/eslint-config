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
	],

	'react/prefer-es6-class': [
		'error',
		'always'
	],

	'react/prefer-read-only-props': 'error',

	'react/prop-types': 'off',

	'react/react-in-jsx-scope': 'error',

	'react/require-default-props': 'error',

	'react/require-optimization': [ 
		'error', {
			'allowDecorators': [
				'pureRender'
			]
		}
	],

	'react/require-render-return': 'error',

	'react/self-closing-comp': [
		'error', {
			'component': true,
			'html': true
		}
	],

	'react/sort-comp': [
		'warn', {
			order: [
				'static-methods',
				'lifecycle',
				'everything-else',
				'render'
			],
			groups: {
				lifecycle: [
				'displayName',
				'propTypes',
				'contextTypes',
				'childContextTypes',
				'mixins',
				'statics',
				'defaultProps',
				'constructor',
				'getDefaultProps',
				'state',
				'getInitialState',
				'getChildContext',
				'getDerivedStateFromProps',
				'componentWillMount',
				'UNSAFE_componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'UNSAFE_componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'UNSAFE_componentWillUpdate',
				'getSnapshotBeforeUpdate',
				'componentDidUpdate',
				'componentDidCatch',
				'componentWillUnmount'
				]
			}
		}
	]
}