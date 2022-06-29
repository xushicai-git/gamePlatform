<template>
	<view class="content">
		<msgItem></msgItem>
	</view>
</template>

<script>
	import msgItem from '@/components/msgItem.vue'
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			this.setTitle("消息详情")
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
