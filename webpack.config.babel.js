import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default () => {
  const isProd = process.env.PROJECT_ENV === 'prod'

  const config = {
    entry: './app/js/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.min.js',
      publicPath: '/dist',
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
    plugins: [],
    devServer: {
      contentBase: __dirname + '/',
      port: 3030
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
  }

  if (isProd) {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          'fallback': 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]',
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      }
    )
    config.plugins.push(
      new ExtractTextPlugin({
        filename: 'styles.min.css',
        allChunks: true
      })
    )
  } else {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]' // this is used for CSS-modules classNames
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    )
  }

  return config
}

/*
  https://stackoverflow.com/questions/36150456/webpack-dev-server-not-bundling-even-after-showing-bundle-valid-message
  Help with resolving webpack-dev-server reload and correct rebuilding.
  Dev-server is storing bundles in memory, instead on a disk, so there must be proper routes matches.
*/

/*
  init eslint config with following command: node_modules\.bin\eslint.cmd
*/

/*
  using SASS vars inside CSS modules: https://stackoverflow.com/questions/40763372/using-scss-variables-in-css-modules
*/