console.log(123)

// import Vue from 'vue'

import Vue from '../node_modules/vue/dist/vue.js'

import login from './login.vue'

// var login = {
// 	template: '<h1>我是tem中的h1</h1>',
	
// }

var vm = new Vue({
	el: '#app',
	data: {
		msg: 'hello'
	},
	// components: {
	// 	login
	// }
	render: function(createElements) {
		return createElements(login)
	}
})
