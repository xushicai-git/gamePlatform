<template>
	<view class="content">
		<view class="header-wapper">
			<timeChange></timeChange>
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
			this.setTitle("提现记录")
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
	margin: 20rpx 0;
	align-items: center;
}

</style>
