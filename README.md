#  Foretag ESLint Config

The official eslint configuration for Foretag internal and public projects.

## Install

**NPM**

```npm install @foretag/eslint-config --save-dev```

**Yarn**

```yarn add -D @foretag/eslint-config```

## Usage
.eslintrc
```json
{
	"extends": "@foretag"
}
```

### With suppported tooling
```json
{
	"extends": [
		// React
		"@foretag/eslint-config/react"
		
		// React Native
		"@foretag/eslint-config/react-native",

		// GraphQL
		"@foretag/eslint-config/graphql",

		// Jest
		"@foretag/eslint-config/jest",

		// Cypress
		"@foretag/eslint-config/cypress",
	]
}
```

## Supported languages and tools

- [x] JavaScript
- [x] TypeScript
- [x] GraphQL
- [x] React and  React  Native
- [x] Cypress
- [x] Jest
