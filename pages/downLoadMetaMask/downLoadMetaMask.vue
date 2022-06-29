<template>
	<view class="page">
		<statusBar></statusBar>
		<view class="title">
			{{"请登录您的MetaMask钱包"|lang}}
		</view>
		<view class="metamask-wapper">
			<image src="../../static/icon/MetaMask.png" class="logo-icon"></image>
			<text>MetaMask</text>
		</view>
		<view class="ts">
			{{"如果您没有MetaMask钱包，请点击“安装扩展程序”。创建MetaMask钱包，您将能够登录。"|lang}}
		</view>
		<image class="img" @click="toPageAll(googleplay)" src="../../static/img/googlePlay.png"></image>
		<image class="img" @click="toPageAll(appStore)" src="../../static/img/appleStore.png"></image>
		<btn class="btn" @tab='downLoad'>{{"安装扩展"|lang}}</btn>
		<btn class="btn btn2" @tab="back">{{"返回"|lang}}</btn>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				googleplay:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
				appStore:"https://apps.apple.com/us/app/metamask/id1438144202"
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			downLoad(){
				let sys = uni.getSystemInfoSync()
				if(sys.platform=='ios'){
					this.toPageAll(this.googleplay)
				}else{
					this.toPageAll(this.appStore)
				}
			}
		}
	}
</script>

<style scoped>
.img{
	width: 369rpx;
	height: 109rpx;
	margin-bottom: 57rpx;
}
.logo-icon{
	width: 110rpx;
	height: 102rpx;
	margin-right: 30rpx;
}
.page{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100rpx 60rpx 10rpx;
}
.title{
	font-size: 46rpx;
	color:#9377FF;
	margin-bottom: 100rpx;
}
.metamask-wapper{
	display: flex;
	align-items: center;
	font-size: 72rpx;
	margin-bottom: 80rpx;
}
.ts{
	line-height: 1.8em;
	margin-bottom: 120rpx;
}
.btn{
	width: 579rpx;
	margin-bottom: 69rpx;
	margin-top: 80rpx;
}
.btn2{
	background: #222050;
	margin-top: 0;
}
</style>
