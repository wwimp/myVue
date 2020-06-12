import './index.css';


import Vue from 'vue';
// import Vue from '../node_modules/vue/dist/vue.js';

import login from './login.vue';



var vm = new Vue({
	el: '#app',
	data: {
		msg: '123',

	},
	// // components: {
	// // 	login
	// // }
	// render: function(createElements) {
	// 	return createElements(login)
	// },
	// render: (createElements, context) => createElements(login),
	render: c => c(login),
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
