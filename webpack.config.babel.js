import path from 'path'

export default () => {
	const isProd = process.env.PROJECT_ENV === 'prod'

	return {
		entry: './app/js/index.jsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.min.js',
			publicPath: '/dist', // the url to the output directory resolved relative to the HTML page
		},
		module: {
			rules: [
				{
					test: /\.jsx$/,
					include: [
						path.resolve(__dirname, 'app')
					],
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						cacheDirectory: true,
						presets: ['env', 'react']
					}
				}
			],
		},
		devServer: {
			contentBase: __dirname + '/',
			port: 3030
		},
		devtool: isProd ? 'source-map' : 'eval-source-map',
		target: 'web', // enum

		// stats: "errors-only",
		// // lets you precisely control what bundle information gets displayed
	}
}

/*
  https://stackoverflow.com/questions/36150456/webpack-dev-server-not-bundling-even-after-showing-bundle-valid-message
  Help with resolving webpack-dev-server reload and correct rebuilding.
  Dev-server is storing bundles in memory, instead on a disk, so there must be proper routes matches.
*/

/*
  init eslint config with following command: node_modules\.bin\eslint.cmd
 */