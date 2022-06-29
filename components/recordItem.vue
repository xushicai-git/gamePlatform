<template>
	<view class="wapper">
		<view class="wapper-item">
			<view class="item-item">
				<text>充值</text>
				<text>订单号：RE2229908892902333</text>
			</view>
		</view>
		<view class="wapper-item">
			<view class="item-item">
				<text>RMB</text>
				<text>3000.00</text>
			</view>
			<view class="item-item">
				<text>USDT</text>
				<text>3000.00</text>
			</view>
		</view>
		<view class="wapper-item">
			<view class="item-item">
				<text>2022/06/17 22:10</text>
				<text style="color: #4AF117;">待支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"recordItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.wapper{
	background: #190062;
	border-radius: 15rpx;
	padding: 10rpx 27rpx;
	font-size: 24rpx;
	margin-bottom: 25rpx;
}
.wapper-item{
	padding: 20rpx 0;
	border-bottom: 1px solid rgba(255, 255, 255, .4);
	line-height: 1.8em;
}
.wapper-item:last-child{
	border-bottom: none;
	padding: 30rpx 0;
}
.item-item{
	display: flex;
	justify-content: space-between;
}
</style>