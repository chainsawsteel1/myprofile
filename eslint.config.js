import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		"rules": {
			"semi": ["error", "always"],
			"semi-spacing": ["error", {"after": true, "before": false}],
			"semi-style": ["error", "last"],
			"no-extra-semi": "error",
			"no-unexpected-multiline": "error",
			"no-unreachable": "error"
		}
	}
	
];