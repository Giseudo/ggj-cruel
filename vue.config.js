var webpack = require('webpack')

module.exports = {
	outputDir: './docs',
	css: {
		loaderOptions: {
			sass: {
				data: "@import '~@/stylesheets/core.scss';",
				includePaths: [
					require("bourbon-neat").includePaths,
				]
			}
		}
	},
}
