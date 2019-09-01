import recommended from './configurations/recommended.json'

import * as rulesBabel from './rules/babel'
import * as rulesErrors from './rules/errors'
import * as rulesFlow from './rules/flow'
import * as rulesPractices from './rules/practices'
import * as rulesReact from './rules/react'
import * as rulesReactNative from './rules/react-native'
import * as rulesVariables from './rules/variables'

export default {

	env: {
		browser: true,
		node: true,
		worker: true,
		jest: true,
		'react-native/react-native': true
	},

	configs: {
		recommended
	},

	rules: {
		...rulesBabel,
		...rulesErrors,
		...rulesFlow,
		...rulesPractices,
		...rulesReact,
		...rulesReactNative,
		...rulesVariables
	}

}