const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		'single-spa-config': 'single-spa.config.js',
	},
	output: {
		publicPath: '',
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
	},
	module: {
		rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                exclude: [path.resolve(__dirname,'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
        ],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'index.html')},
			{from: path.resolve(__dirname, 'src/ng1'), to: "ng1"},
			{from: path.resolve(__dirname, 'src/js'), to: "js"}
        ]),
		new CleanWebpackPlugin(['release'])
	],
	devtool: 'source-map',
	externals: [
	],
    mode: 'development',
    devServer: {
		contentBase: './release',
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
		// Proxy config for development purposes. In production, you would configure you webserver to do something similar.
        // proxy: {
        //     "/app5": {
        //         target: "http://localhost:9005",
        //         pathRewrite: {"^/app5" : ""}
        //     }
        // }
    }
};