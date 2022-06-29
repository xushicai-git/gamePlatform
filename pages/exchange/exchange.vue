<template>
	<view>
		<u-navbar back-icon-color="#FFF" title-color="#FFF" :title="'交换'|lang" :background="{background:'#190062'}" :border-bottom="false">
			<image @click="toPage('/pages/excLog/excLog')" slot="right" class="icon-edit" src="../../static/icon/bijiben.png"></image>
		</u-navbar>
		<view class="cart">
			<view class="input-title-wapper">
				<image src="../../static/icon/foxG.png" mode="aspectFit" class="input-icon"></image>
				<text class="input-title-txt">FoxG</text>
				<text>{{"余额"|lang}}：33.00USDT</text>
			</view>
			<u-input border="2" placeholder="请输入数量">
				<view slot="right" class="max">MAX</view>
			</u-input>
			<view class="input-title-wapper">
				<image src="../../static/img/usdt.png" mode="aspectFit" class="input-icon"></image>
				<text class="input-title-txt">FoxG</text>
				<text>{{"余额"|lang}}：33.00USDT</text>
			</view>
			<u-input border="2" placeholder="请输入数量"></u-input>
			<view class="num-ts">{{"价格"|lang}}1USDT=123FoxG</view>
			<view class="rc-title">
				{{"滑动容差"|lang}}
			</view>
			<view class="tabs-wapper">
				<view class="tabs-item tabs-item-ac">2%</view>
				<view class="tabs-item">5%</view>
				<view class="tabs-item">10%</view>
				<view class="tabs-item">15%</view>
			</view>
			<btn type="or" class="btn">{{"交换"|lang}}</btn>
		</view>
		<view class="cart ts-wapper">
			<view class="ts-item">
				<text class="ts-title">{{"手续费"|lang}}:</text>
				<image class="wh" src="../../static/icon/wenhao.png"></image>
				<text class="ts-num">1.2FoxG</text>
			</view>
			<view class="ts-item">
				<text class="ts-title">{{"价格影响"|lang}}:</text>
				<image class="wh" src="../../static/icon/wenhao.png"></image>
				<text class="ts-num">0.0018%</text>
			</view>
			<view class="ts-item">
				<text class="ts-title">{{"最小获得量"|lang}}:</text>
				<image class="wh" src="../../static/icon/wenhao.png"></image>
				<text class="ts-num">1.2USDT</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.icon-edit{
	width: 36rpx;
	height: 36rpx;
	margin-right: 25rpx;
}
.cart{
	background: #080231;
	border-radius: 39rpx;
	overflow: hidden;
	padding: 50rpx 10rpx;
	margin: 25rpx;
}
.input-icon{
	width: 44rpx;
	height: 44rpx;
}
.input-title-wapper{
	display: flex;
	align-items: center;
	font-size: 24rpx;
	margin-bottom: 18rpx;
	margin-top: 26rpx;
}
.input-title-txt{
	flex: 1;
	font-size: 30rpx;
	margin: 0 10rpx;
}
.max{
	width: 153rpx;
	height: 86rpx;
	background: #1D0B99;
	border-radius: 25rpx;
	font-size: 32rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
/deep/.u-input{
	padding-right: 0 !important;
	border: none !important;
	min-height: 86rpx;
}
.num-ts{
	color: #F57318;
	font-size: 26rpx;
	margin-top: 18rpx;
}
.rc-title{
	margin-top: 50rpx;
	margin-bottom: 25rpx;
}
.tabs-wapper{
	display: flex;
	flex-wrap: wrap;
	width: 750rpx;
	overflow: hidden;
}
.tabs-item{
	width: 156rpx;
	height: 57rpx;
	background: #FFFFFF;
	border-radius: 25rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	font-size: 32rpx;
	margin-right: 20rpx;
	margin-bottom: 30rpx;
}
.tabs-item-ac{
	background: #1D0B99;
	color:#FFF;
}
.btn{
	margin-top: 39rpx;
	width: 656rpx;
}
.wh{
	width: 29rpx;
	height: 29rpx;
}
.ts-item{
	display: flex;
	align-items: center;
	font-size: 24rpx;
	line-height: 1.8em;
}
.ts-title{
	margin-right: 10rpx;
}
.ts-num{
	flex: 1;
	text-align: right;
}
</style>
