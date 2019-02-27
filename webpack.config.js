const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

const destination = "dist";

const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/client/dialog-template.html",
	filename: "dialog.html",
	inlineSource: ".(js|css)$" // embed all javascript and css inline
});

const htmlWebpackInlineSourcePlugin = new HtmlWebpackInlineSourcePlugin();

const sharedConfigSettings = {
	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				uglifyOptions: {
					ie8: true,
					mangle: false,
					compress: {
						properties: false
					},
					output: {
						beautify: true
					}
				}
			})
		]
	},
	module: {}
};

const appsscriptConfig = {
	name: "COPY APPSSCRIPT.JSON",
	entry: "./appsscript.json",
	plugins: [
		new CleanWebpackPlugin([destination]),
		new CopyWebpackPlugin([
			{
				from: "./appsscript.json"
			}
		])
	]
};

const clientConfig = Object.assign({}, sharedConfigSettings, {
	name: "CLIENT",
	entry: "./src/client/index.tsx",
	output: {
		path: path.resolve(__dirname, destination)
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}, {
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}, {
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		htmlPlugin,
		new HtmlWebpackInlineSourcePlugin(),
		new TSLintPlugin({
			files: ["./src/**/*.ts"]
		})
	]
});

const serverConfig = Object.assign({}, sharedConfigSettings, {
	name: "SERVER",
	entry: "./src/server/code.ts",
	output: {
		filename: "code.js",
		path: path.resolve(__dirname, destination),
		libraryTarget: "this"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}, {
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new GasPlugin(),
		new TSLintPlugin({
			files: ["./src/**/*.ts"]
		})
	]
});

module.exports = [
	appsscriptConfig,
	clientConfig
	// serverConfig
];
