<template>
	<view class="content">
		<msgItem :content="data.content" :time="data.createTime" :title="data.title"></msgItem>
	</view>
</template>

<script>
	import msgItem from '@/components/msgItem.vue'
	export default {
		data() {
			return {
				data:{}
			}
		},
		onReady() {
			this.setTitle("公告")
		},
		onLoad({data}) {
			this.data = this.urlParse(data)
		},
		components:{msgItem},
		methods: {
			
		}
	}
</script>

<style scoped>
.content{
	padding: 26rpx;
}
</style>
