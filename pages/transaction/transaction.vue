<template>
	<view class="content">
		<view class="header-wapper">
			<timeChange></timeChange>
			<dropdown>充值</dropdown>
		</view>
		<recordItem v-for="item in 10"></recordItem>
	</view>
</template>

<script>
	import dropdown from "@/components/dropdown.vue"
	import recordItem from "@/components/recordItem.vue"
	import timeChange from "@/components/timeChange.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{dropdown,recordItem,timeChange},
		onReady() {
			this.setTitle("交易")
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.content{
	padding: 0 25rpx;
}
.header-wapper{
	display: flex;
	justify-content: flex-end;
	margin-top: 27rpx;
	margin-bottom: 17rpx;
	align-items: center;
}

</style>
