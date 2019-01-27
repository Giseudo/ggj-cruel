var webpack = require('webpack')

module.exports = {
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
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					// 'API_URL': JSON.stringify(process.env.API_URL)
				}
			})
		]
	}
}
