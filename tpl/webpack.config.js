// 使用node语法规范
// 路径操作
let path = require('path');
// 引入插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack 自带的，引入webpack
let webpack = require('webpack');
// 抽离css的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 分别抽离less,css等
// let lessExtract = new ExtractTextWebpackPlugin('css/less.css');
// let cssExtract = new ExtractTextWebpackPlugin('css/css.css');
let lessExtract = new ExtractTextWebpackPlugin({
	filename: 'css/less.css',
	// disable: true
});
let cssExtract = new ExtractTextWebpackPlugin({
	filename: 'css/css.css',
	// disable: true
});
let sassExtract = new ExtractTextWebpackPlugin({
	filename: 'css/sass.css',
	// disable: true
});
// 忽略打包无用样式的插件，purifycss-webpack必须用在html-plugin后面
let PurifycssWebpack = require('purifycss-webpack');
// 配合上面的purifycss-webpack插件使用时进行搜索的插件
let glob = require('glob');
// 导入vue相关插件
let VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: './src/index.js', // 入口
	// entry: { // 多入口
	// 	index: './src/index.js',
	// 	a: './src/a.js'
	// }, // 入口
	output: {
		// filename: 'main.[hash:8].js',
		// filename: 'main.js',
		filename: '[name].js', // name 自动匹配对应的文件名 多出口
		path: path.resolve('./dist')
	}, // 出口
	devServer: {
		contentBase: './dist', // 根目录
		port: 3000, // 端口号
		compress: true, // 服务器压缩
		hot: true, // 热更新
		open: true // 自动打开浏览器
	}, // 开发服务器
	module: {
		rules: [{
				test: /\.css$/,
				// 抽离css
				use: cssExtract.extract({
					fallback: 'style-loader', // 上面disable为true时，我们仍任希望能够热更新(开发)，所以这样设置，把插入方式由link换回style
					use: [ // 数组里套对象，这样方便传参（options）
						{
							loader: 'css-loader',
							// options: ''
						},
						// // 自动加前缀的相关操作
						// {
						// 	loader: 'postcss-loader'
						// }
					]
				})

			},
			{
				test: /\.less$/,
				use: lessExtract.extract({
					fallback: 'style-loader', // 上面disable为true时，我们仍任希望能够热更新（开发），所以这样设置，把插入方式由link换回style
					use: [ // 数组里套对象，这样方便传参（options）
						{
							loader: 'css-loader',
							// options: ''
						},
						{
							loader: 'less-loader',
							// options: ''
						},
						// // 自动加前缀的相关操作 
						// {
						// 	loader: 'postcss-loader'
						// }
					]
				})
			},
			{
				test: /\.scss$/,
				use: sassExtract.extract({
					fallback: 'style-loader', // 上面disable为true时，我们仍任希望能够热更新（开发），所以这样设置，把插入方式由link换回style
					use: [ // 数组里套对象，这样方便传参（options）
						{
							loader: 'css-loader',
							// options: ''
						},
						{
							loader: 'sass-loader',
							// options: ''
						},
						// // 自动加前缀的相关操作 
						// {
						// 	loader: 'postcss-loader'
						// }
					]
				})
			},
			///////

			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/,
				use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
			}, // 处理 图片路径的 loader
			// limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
			}, // 处理 字体文件的 loader 
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}, // 配置 Babel 来转换高级的ES语法
			//////
		]
	}, // 模块配置
	plugins: [
		// vue插件
		new VueLoaderPlugin(),

		// 抽离css
		// new ExtractTextWebpackPlugin({
		// 	filename: 'css/index.css'
		// }),
		lessExtract,
		cssExtract,
		sassExtract,
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 打包html的插件
		new HtmlWebpackPlugin({ // new一个，只能导出一个，需要导出多个，则继续new
			// 生成HTML的名字
			// filename: 'index.html',
			// chunks: ['index'], // 生成时，指定要引用的js
			// html 模板路径
			template: './src/index.html',
			// 某个属性title
			title: '俺是标题',
			// 压缩代码用的
			// minify: {
			// 	// 去除引号
			// 	removeAttributeQuotes: true,
			// 	// 去除空白
			// 	collapseWhitespace: true
			// },
			// // 增加hash，方便进行清除缓存等操作
			// hash: true
		}),

		// 剔除无用样式的插件
		new PurifycssWebpack({
			paths: glob.sync(path.resolve('src/*.html'))
		})

	], // 插件
	mode: 'development', // 模式，设置为开发模式（可更改）(默认为production生产环境)
	resolve: {
		alias: { // 修改 Vue 被导入时候的包的路径
			"vue$": "vue/dist/vue.js"
		}
	}, // 配置解析
}
