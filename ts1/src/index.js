let str = require('./a.js');
console.log(str);
document.getElementById('app').innerHTML = str + 1232234444;
// 导入样式模块
import './index.css';
import './index.less';



import Vue from '../node_modules/vue/dist/vue.js';

import login from './login.vue';

var vm = new Vue({
	el: '#app',
	data: {
		msg: 'login',

	},
	render: (createElements, context) => createElements(login)
})


// 热更新配置
if (module.hot) {
	// 检测，代码改动就更新
	module.hot.accept();
	// 某个js代码改动，就更新
	// module.hot.accept('./a/js',function(){
	// 	let str = require('./a.js');
	// 	console.log(str);
	// })
}
