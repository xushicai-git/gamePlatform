<template>
	<view class="time-wapper">
		<image class="time-icon" src="@/static/icon/riqi.png"></image>
		<view class="time-txt">2022-6-17</view>
		<u-icon size="28" name="arrow-down"></u-icon>
	</view>
</template>

<script>
	export default {
		name:"timeChange",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.time-icon{
	width: 43rpx;
	height: 40rpx;
}
.time-wapper{
	display: flex;
	align-items: center;
	font-size: 24rpx;
	margin-right: 30rpx;
}
.time-txt{
	margin: 0 10rpx;
}
</style>