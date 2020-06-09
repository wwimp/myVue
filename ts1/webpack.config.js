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
// 忽略打包无用样式的插件，purifycss-webpack必须用在html-plugin后面
let PurifycssWebpack = require('purifycss-webpack');
// 配合上面的purifycss-webpack插件使用时进行搜索的插件
let glob = require('glob');
// // 导入copy插件
// let CopyWebpackPlugin = require('copy-webpack-plugin');
// 导入vue相关插件
let VueLoaderPlugin = require('vue-loader/lib/plugin');




module.exports = {
	// 默认情况下，只有一个入口文件，生成时，会把与这一个相关联的js打包在一起形成一个新的js，如果需要多入口与多出口，则需要进行配置
	entry: './src/index.js', // 入口
	// entry: ['./src/index.js', './src/a.js'], // 入口
	// entry: path.join(__dirname, './src/index.js'), // 入口
	// entry: { // 多入口
	// 	index: './src/index.js',
	// 	a: './src/a.js'
	// }, // 入口
	output: {
		// filename: 'main.[hash:8].js',
		// filename: 'main.js',
		filename: '[name].js', // name 自动匹配对应的文件名
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
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader']
			// }, 
			// 匹配规则，从右往左
			// {
			// 	test: /\.css$/,
			// 	use: [{ // 数组里套对象，这样方便传参（options）
			// 			loader: 'style-loader',
			// 			// options: ''
			// 		},
			// 		{
			// 			loader: 'css-loader',
			// 			// options: ''
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.less$/,
			// 	use: [{ // 数组里套对象，这样方便传参（options）
			// 			loader: 'style-loader',
			// 			// options: ''
			// 		},
			// 		{
			// 			loader: 'css-loader',
			// 			// options: ''
			// 		},
			// 		{
			// 			loader: 'less-loader',
			// 			// options: ''
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.css$/,
			// 	// 抽离css
			// 	use: ExtractTextWebpackPlugin.extract({
			// 		use: [ // 数组里套对象，这样方便传参（options）
			// 			{
			// 				loader: 'css-loader',
			// 				// options: ''
			// 			}
			// 		]
			// 	})

			// },
			// {
			// 	test: /\.less$/,
			// 	use: ExtractTextWebpackPlugin.extract({
			// 		use: [ // 数组里套对象，这样方便传参（options）
			// 			{
			// 				loader: 'css-loader',
			// 				// options: ''
			// 			},
			// 			{
			// 				loader: 'less-loader',
			// 				// options: ''
			// 			}
			// 		]
			// 	})
			// },
			{
				test: /\.css$/,
				// 抽离css
				use: cssExtract.extract({
					fallback: 'style-loader', // 上面disable为true时，我们仍任希望能够热更新(开发)，所以这样设置，把插入方式由link换回style
					use: [ // 数组里套对象，这样方便传参（options）
						{
							loader: 'css-loader',
							// options: ''
						},
						// 自动加前缀的相关操作
						{
							loader: 'postcss-loader'
						}
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
						// 自动加前缀的相关操作 
						{
							loader: 'postcss-loader'
						}
					]
				})
			},
			///////

			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// // 它会应用到普通的 `.js` 文件
			// // 以及 `.vue` 文件中的 `<script>` 块
			// // {
			// // 	test: /\.js$/,
			// // 	loader: 'babel-loader'
			// // },
			// // 它会应用到普通的 `.css` 文件
			// // 以及 `.vue` 文件中的 `<style>` 块
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'vue-style-loader',
			// 		'css-loader'
			// 	]
			// }


			//////
		]
	}, // 模块配置
	plugins: [
		// vue插件
		new VueLoaderPlugin(),


		// // copy插件(不知道啥问题，会报错，不用了)
		// new CopyWebpackPlugin(
		// 	[{
		// 		from: './src/doc',
		// 		to: 'public'
		// 	}, ],
		// ),
		// 抽离css
		// new ExtractTextWebpackPlugin({
		// 	filename: 'css/index.css'
		// }),
		lessExtract,
		cssExtract,
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 清除缓存（有问题，懒得弄了）
		// new CleanWebpackPlugin(['./dist']),
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
		// new HtmlWebpackPlugin({ // new一个，只能导出一个，需要导出多个，则继续new
		// 	// 生成HTML的名字
		// 	filename: 'index2.html',
		// 	chunks: ['a'], // 生成时，指定要引用的js
		// 	// html 模板路径
		// 	template: './src/index.html',
		// 	// 某个属性title
		// 	title: '俺是标题',
		// 	// 压缩代码用的
		// 	// minify: {
		// 	// 	// 去除引号
		// 	// 	removeAttributeQuotes: true,
		// 	// 	// 去除空白
		// 	// 	collapseWhitespace: true
		// 	// },
		// 	// // 增加hash，方便进行清除缓存等操作
		// 	// hash: true
		// }),

		// 剔除无用样式的插件
		new PurifycssWebpack({
			paths: glob.sync(path.resolve('src/*.html'))
		})



	], // 插件
	mode: 'development', // 模式，设置为开发模式（可更改）(默认为production生产环境)
	resolve: {}, // 配置解析
}
// 1.在webpack中配置开发服务器 webpack-dev-server
// 2.webpack插件 
// 2.1将html打包到dist下可以自动引入生产的js


// 1.抽离样式，抽离到一个css文件中，通过css文件的方式来引入
// 插件：npm i extract-text-webpack-plugin@next (这个插件是webpack3时的，所以加上@next表示webpack4用) mini-css-extract-plugin (webpack新提供的，有bug??) -D
