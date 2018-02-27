/// <binding AfterBuild='Run - Development' />
const path = require( "path" );
const webpackMerge = require("webpack-merge");
const webpack = require( "webpack" );

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const Autoprefixer = require( "autoprefixer" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );
const CleanWebpackPlugin = require("clean-webpack-plugin");

const cleanPlugin = new CleanWebpackPlugin([
	'./wwwroot/data',
	'./wwwroot/style',
	'./wwwroot/script'
]);

commonConfig = {
	entry: {
		polyfills: "./scripts/polyfills.ts",
		vendor: "./scripts/vendor.ts",
		app: "./scripts/main.ts" 
	},

	output: {
		path:  path.join(__dirname, "../wwwroot"),
		filename: "script/[name].js?[hash]",
		chunkFilename: "script/[id].[hash].chunk.js",
		publicPath: "/"
	},

	resolve: {
		extensions: [".ts", ".js", ".json", ".css", ".less", ".html"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					ignoreDiagnostics: [
						2403, // 2403 -> Subsequent variable declarations
						2300, // 2300 -> Duplicate identifier
						2374, // 2374 -> Duplicate number index signature
						2375, // 2375 -> Duplicate string index signature
						2502 // 2502 -> Referenced directly or indirectly
					]
				},
				exclude: [/node_modules\/(?!(ng2-.+))/]
			},
			// copy those assets to output
			{
				test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
				use: "file-loader?name=data/assets/[name]-[hash:6].[ext]"
			},
			// Load css files which are required in vendor.ts
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['css-loader?sourceMap', 'less-loader?sourceMap'] })
				//use: "css?sourceMap!" + "less?sourceMap"
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['css-loader?sourceMap', 'less-loader?sourceMap'] })
				//use: "css?sourceMap!" + "less?sourceMap"

			},
			{
				test: /\.html$/,
				use: "raw-loader"
			}
		],
		noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			//minimize: true,
			options: {
				postcss: Autoprefixer( { browsers: ['last 2 versions'] } )
			}
		}),
		new ExtractTextPlugin({filename:"style/styles.css", allChunks: true }),
		new CommonsChunkPlugin( { names: ["app", "vendor", "polyfills"] } ),
		new CopyWebpackPlugin([
{ from: "scripts/templates", to: "data/templates" }
		]),
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: "body",
			template: "./scripts/index.html"
		})
	]
};

buildConfig = webpackMerge(commonConfig, {
	devtool: "source-map",
	watch: false,
	watchOptions: {
		aggregateTimeout: 100
	}
});

module.exports = webpackMerge(buildConfig, { plugins: [cleanPlugin] });