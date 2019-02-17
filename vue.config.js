var webpack = require('webpack')

module.exports = {
	publicPath: 'ggj-cruel',
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
