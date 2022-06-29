<template>
	<view class="none-wapper">
		<slot>
			<image class="none-img" src="../static/img/none.png" mode="aspectFit"></image>
		</slot>
		<text class="none-txt">{{txt|lang}}</text>
	</view>
</template>

<script>
	export default {
		name:"none",
		props:{
			icon:{
				default:"../static/svg/none.svg"
			},
			txt:{
				default:""
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.none-img{
	width: 600rpx;
	height: 480rpx;
	margin-bottom: -50rpx;
}
.none-wapper{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding-top: calc( (100vh - 600rpx) / 4 );
}
.none-txt{
	color: #FFF;
	font-size: 28rpx;
	margin-top: 30rpx;
	transform: translateY(-80rpx);
}
</style>
