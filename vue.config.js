const path = require("path");

const apiUrl = process.env.VUE_APP_API_URL || `http://localhost:3000`;

module.exports = {
	outputDir: path.resolve(__dirname, "../server/public"),
	devServer: {
		disableHostCheck: process.env.IS_GITPOD ? true : false,
		proxy: {
			"/api": {
				target: apiUrl
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/styles/variables.sass";`
			}
		}
	}
};
