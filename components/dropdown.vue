<template>
	<view class="header-btn-item" @click="tab">
		<view class="left-wapper">
			<slot name="left"></slot>
		</view>
		<text class="btn-item-txt">
			<slot></slot>
		</text>
		<u-icon size="30" name="arrow-down"></u-icon>
	</view>
</template>

<script>
	export default {
		name:"dropdown",
		data() {
			return {
				
			};
		},
		methods:{
			tab(){
				this.$emit("tab")
			}
		}
	}
</script>

<style>
.header-btn-item{
	background-color: #4B2EFF;
	height: 75rpx;
	padding: 0 20rpx;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bnt-item-icon{
	width: 56rpx;
	height: 56rpx;
	border-radius: 50%;
}
.btn-item-txt{
	margin: 0 10rpx 0 0rpx;
	font-size: 24rpx;
}
.bnt-item-icon2{
	width: 51rpx;
	height: 34rpx;
}
.btn-item-txt2{
	font-size: 24rpx;
}
.left-wapper{
	margin-right: 10rpx;
	display: flex;
	align-items: center;
}
</style>