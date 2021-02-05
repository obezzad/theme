module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true
	},
	plugins: ["vue", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:vue/recommended"
	],
	rules: {
		"vue/html-indent": [1, "tab"],
		"vue/max-attributes-per-line": [
			2,
			{
				singleline: 2,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		]
	},
	overrides: [
		{
			files: ["**/*.spec.js"],
			env: {
				jest: true
			},
			plugins: ["jest"]
		}
	]
};
