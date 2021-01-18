const rulesErrors = require('./rules/errors');
const rulesPractices = require('./rules/practices');
const rulesGraphQL = require('./rules/graphql');
const rulesJsx = require('./rules/jsx');
const rulesReact = require('./rules/react');
const rulesReactNative = require('./rules/react-native');
const rulesVariables = require('./rules/variables');

module.exports.rules = {
	...rulesErrors,
	...rulesPractices,
	...rulesGraphQL,
	...rulesJsx,
	...rulesReact,
	...rulesReactNative,
	...rulesVariables
}