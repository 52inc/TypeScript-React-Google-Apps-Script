const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");


// Config
const destination = "dist";
const isDev = process.env.NODE_ENV !== "production";

// Bundle Dialog Template HTML
const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/client/dialog-template.html",
	filename: "dialog.html",
	inlineSource: ".(js|css)$" // embed all javascript and css inline
});


/*      Shared Config
================================== */

const sharedConfigSettings = {
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				parallel: true,
				sourceMap: isDev,
				terserOptions: {
					ie8: true,     // Necessary for GAS compatibility
					mangle: false, // Necessary for GAS compatibility
					ecma: undefined,
					module: false,
					toplevel: false,
					nameCache: null,
					keep_classnames: undefined,
					safari10: false,
					parse: {},
					compress: {},
					keep_fnames: isDev,
					warnings: isDev,
					output: {
						beautify: isDev,
						comments: isDev
					}
				}
			})
		]
	},
	module: {}
};


/*    Google Apps Script Config
================================== */

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


/*          Client Config
================================== */

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
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			}, {
				test: /\.[jt]sx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}, {
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}, {
				test: /\.scss?$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						sourceMap: isDev
					}
				}]
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


/*      	Server Config
================================== */

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


/*      Module Exports
================================== */

module.exports = [
	appsscriptConfig,
	clientConfig,
	serverConfig
];
