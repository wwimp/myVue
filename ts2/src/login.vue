<template>
	<div>
		<h1>使用.vue 定义出来的组件   ----  {{msg}}</h1>
		<input type="button" value="000" @click="show">
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '123'
		};
	},
	methods: {
		show() {
			console.log('调用了login.vue中的show方法');
		}
	}
};
</script>

<style>
	
	
</style>
