<template>
	<div>
		<ul class="mui-table-view">
			<!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
		  <router-link :to="'/home/newsinfo/ ' + item.id">
		    <img class="mui-media-object mui-pull-left" :src="item.img_url">
		    <div class="mui-media-body">
		      <h1>{{ item.title }}</h1>
		      <p class='mui-ellipsis'>
		        <span>发表时间：{{ item.add_time | dateFormat }}</span>
		        <span>点击：{{item.click}}次</span>
		      </p>
		    </div>
		  </router-link>
		</li> -->

			<li class="mui-table-view-cell mui-media">
				<router-link to='/home/newsinfo'>
					<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg" />
					<div class="mui-media-body">
						<h1>
							幸福：
							<span>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</span>
						</h1>
						<p class="mui-ellipsis">
							<span>发表时间：2020:20:20 20:20:20</span>
							<span>点击：0次</span>
						</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to='/home/newsinfo'>
					<img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg" />
					<div class="mui-media-body">
						<h1>
							木屋：
							<span>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</span>
						</h1>
						<p class="mui-ellipsis">
							<span>发表时间：2020:20:20 20:20:20</span>
							<span>点击：0次</span>
						</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to='/home/newsinfo'>
					<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg" />
					<div class="mui-media-body">
						<h1>
							CBD：
							<span>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</span>
						</h1>
						<p class="mui-ellipsis">
							<span>发表时间：2020:20:20 20:20:20</span>
							<span>点击：0次</span>
						</p>
					</div>
				</router-link>
			</li>
			
			
			
			
		</ul>
	</div>
</template>

<script>
// import { Toast } from 'mint-ui';

// export default {
// 	data() {
// 		return {
// 			newslist: [] // 新闻列表
// 		};
// 	},
// 	created() {
// 		this.getNewsList();
// 	},
// 	methods: {
// 		getNewsList() {
// 			// 获取新闻列表
// 			this.$http.get('api/getnewslist').then(result => {
// 				if (result.body.status === 0) {
// 					// 如果没有失败，应该把数据保存到 data 上
// 					this.newslist = result.body.message;
// 				} else {
// 					Toast('获取新闻列表失败！');
// 				}
// 			});
// 		}
// 	}
// };
</script>

<style>
/* .mui-table-view {
	  li {
	    h1 {
	      font-size: 14px;
	    }
	    .mui-ellipsis {
	      font-size: 12px;
	      color: #226aff;
	      display: flex;
	      justify-content: space-between;
	    }
	  }
	} */
.mui-table-view li h1 {
	font-size: 14px;
}
.mui-table-view li h1 span {
	font-size: 12px;
	font-weight: 500;
}
.mui-table-view li .mui-ellipsis {
	font-size: 12px;
	color: #226aff;
	display: flex;
	justify-content: space-between;
}
</style>
