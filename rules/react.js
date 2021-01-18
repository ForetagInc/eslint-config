module.exports = {
	rules: {
		'react/boolean-prop-naming': 'off',

		'react/button-has-type': 'error',

		'react/default-props-match-prop-types': 'off',

		'react/destructuring-assignment': [
			'error',
			'always',
		],

		'react/forbid-component-props': 'off',

		'react/forbid-dom-props': 'off',

		'react/forbid-elements': 'off',

		'react/forbid-prop-types': 'off',

		'react/forbid-foreign-prop-types': 'error',

		'react/no-access-state-in-setstate': 'error',

		'react/no-array-index-key': 'error',

		'react/no-children-prop': 'error',

		'react/no-danger': 'error',

		'react/no-danger-with-children': 'error',

		'react/no-deprecated': 'error',

		'react/no-did-mount-set-state': 'error',

		'react/no-did-update-set-state': 'error',

		'react/no-direct-mutation-state': 'error',

		'react/no-find-dom-node': 'error',

		'react/no-is-mounted': 'error',

		'react/no-multi-comp': 'error',

		'react/no-redundant-should-component-update': 'error',

		'react/no-render-return-value': 'error',

		'react/no-set-state': 'error',

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

		// https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
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
		],

		'react/sort-prop-types': 'off',

		'react/state-in-constructor': [
			'error',
			'never'
		],

		/**
			@TODO:
			https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/static-property-placement.md
		*/
		'react/static-property-placement': 'off',

		'react/style-prop-object': 'error',

		'react/void-dom-elements-no-children': 'error'
	}
}