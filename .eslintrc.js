{
	"parser": "babel-eslint",
	"parserOptions":  {
		"sourceType": "module",
		"allowImportExportEverywhere": false,
		"codeFrame": true,
		"ecmaFeatures": {
			"jsx": true
		}
	}
	"plugins": {
		"babel",
		"react",
		"react-native",
		"flowtype"
	],
	'settings': {
		'flowtype': {
			'onlyFilesWithFlowAnnotation': false
		}
	}
}