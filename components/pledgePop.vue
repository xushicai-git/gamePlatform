<template>
	<u-popup v-model="isShow" mode="center" border-radius="39" :closeable="true" close-icon-color="#FFF">
		<view class="pop-content">
			<view class="pop-title">
				{{"质押"}}
			</view>
			<u-form labelPosition="top">
				<u-form-item :border-bottom="false">
					<u-input value="USDT" border="2">
						<image slot="left" class="left-icon" src="../static/img/usdt.png"></image>
						<u-icon slot="right" name="arrow-down" color="#FFF"></u-icon>
					</u-input>
				</u-form-item>
				<u-form-item label="FoxG余额" :border-bottom="false">
					<u-input value="66" border="2"></u-input>
				</u-form-item>
				<u-form-item label="已质押" :border-bottom="false">
					<u-input value="100" border="2"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<u-input placeholder="请输入质押数量" border="2">
						<view class="max" slot="right">MAX</view>
					</u-input>
				</u-form-item>
			</u-form>
			<view class="ts">
				{{"最低质押"}}100FoxG
			</view>
			<btn type="or" class="zy-btn">{{"质押"|lang}}</btn>
		</view>
	</u-popup>
</template>

<script>
	export default {
		name:"pledgePop",
		data() {
			return {
				isShow:false
			};
		},
		methods:{
			show(){
				this.isShow=true
			}
		}
	}
</script>

<style scoped>
.pop-content{
	height: 100%;
	width: 701rpx;
	padding: 46rpx 25rpx 36rpx;
}
.pop-title{
	text-align: center;
}
.left-icon{
	width: 48rpx;
	height: 48rpx;
	margin-right: 45rpx;
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
	color: #FFF;
	margin: -20rpx 0;
	margin-right: -26rpx;
}
.ts{
	color: #818181;
	font-size: 24rpx;
	margin-bottom: 50rpx;
	margin-top: 40rpx;
}
</style>