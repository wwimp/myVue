<template>
	<div>
		<!-- <mt-swipe :auto="1000">
			<mt-swipe-item v-for="item in lunbotuList" :key="item.url"><img src="item.url" /></mt-swipe-item>
		</mt-swipe> -->
		
		<!-- <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
		    <img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe> -->
		
		
		<mt-swipe :auto="1000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
			<mt-swipe-item>4</mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<img src="../../images/menu1.png" alt="" />
					<!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/menu2.png" alt="" />
					<div class="mui-media-body">图片分享</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/menu3.png" alt="" />
					<div class="mui-media-body">商品购买</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/menu4.png" alt="" />
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/menu5.png" alt="" />
					<div class="mui-media-body">视频专区</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/menu6.png" alt="" />
					<div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
// import { Toast } from "mint-ui";

// export default {
//   data() {
//     return {
//       lunbotuList: [] // 保存轮播图的数组
//     };
//   },
//   created() {
//     this.getLunbotu();
//   },
//   methods: {
//     getLunbotu() {
//       // 获取轮播图数据的方法
//       this.$http.get("api/getlunbo").then(result => {
//         // console.log(result.body);
//         if (result.body.status === 0) {
//           // 成功了
//           this.lunbotuList = result.body.message;
//         } else {
//           // 失败的
//           Toast("加载轮播图失败。。。");
//         }
//       });
//     }
//   }
// };
</script>

<style scoped="scoped">
.mint-swipe {
	height: 200px;
}
.mint-swipe-item:nth-child(1) {
	background-color: #08b;
}
.mint-swipe-item:nth-child(2) {
	background-color: #8b0;
}
.mint-swipe-item:nth-child(3) {
	background-color: #80b;
}
.mint-swipe-item:nth-child(4) {
	background-color: #b80;
}
.mint-swipe-item img {
	width: 100%;
	height: 100%;
}

.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border: none;
}
.mui-grid-view.mui-grid-9 img {
	width: 60px;
	height: 60px;
}

.mui-grid-view.mui-grid-9 .mui-media-body {
	font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	border: 0;
}
</style>
