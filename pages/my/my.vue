<template>
	<view>
		<myHeader></myHeader>
		<view class="user-wapper">
			<view class="user">
				<u-avatar size="106" :src="userInfo.avatar" @click="toPage('/pages/updateAvatar/updateAvatar')"></u-avatar>
				<view class="nickname-wapper">
					<view class="nickname">{{"用户名"|lang}}:{{userInfo.nickName}}</view>
					<view class="id" @click="toPage('/pages/updateAvatar/updateAvatar')">
						<text>id:12345678</text>
					</view>
				</view>
			</view>
		</view>
		<view class="page-content">
			<view class="sy-wapper">
				<view class="sy-title">{{'总收益'|lang}}</text></view>
				<view class="num-wapper">
					<view class="num-item">
						<view class="num-title">
							<text>USDT:</text>
							<text class="num">150.21236</text>
						</view>
						<view class="num">≈$150</view>
					</view>
					<view class="num-item">
						<view class="num-title">
							<text>FoxG:</text>
							<text class="num">150.21236</text>
						</view>
						<view class="num">≈$150</view>
					</view>
				</view>
				<view class="sy-title">{{'今日收益 '|lang}}</text></view>
				<view class="num-wapper">
					<view class="num-item">
						<view class="num-title">
							<text>USDT:</text>
							<text class="num">150.21236</text>
						</view>
						<view class="num">≈$150</view>
					</view>
					<view class="num-item">
						<view class="num-title">
							<text>FoxG:</text>
							<text class="num">150.21236</text>
						</view>
						<view class="num">≈$150</view>
					</view>
				</view>
				<view class="btn-wapper">
					<btn class="btn" @tab="toPage('/pages/recharge/recharge')">
						<image src="../../static/icon/chongzhi.png" class="btn-icon"></image>
						<text>{{"充值"|lang}}</text>
					</btn>
					<btn class="btn" @tab="toPage('/pages/withdrawal/withdrawal')">
						<image src="../../static/icon/tixian.png" class="btn-icon"></image>
						<text>{{"提现"|lang}}</text>
					</btn>
					<btn class="btn" @tab="toPage('/pages/exchange/exchange')">
						<image src="../../static/icon/jiaohuan.png" class="btn-icon"></image>
						<text>{{"交换"|lang}}</text>
					</btn>
				</view>
			</view>
			
			<view class="nav-wapper">
				<view class="nav-item" @click="toPage('/pages/account/account')">
					<image src="../../static/icon/zhanghu.png" class="nav-icon" mode="aspectFit"></image>
					<view class="nav-item-txt">{{"银行账户"|lang}}</view>
					<image src="../../static/icon/my-right.png" class="nav-icon-right"></image>
				</view>
				<view class="nav-item" @click="toPage('/pages/securityCenter/securityCenter')">
					<image src="../../static/icon/anquan.png" class="nav-icon" mode="aspectFit"></image>
					<view class="nav-item-txt">{{"安全中心"|lang}}</view>
					<image src="../../static/icon/my-right.png" class="nav-icon-right"></image>
				</view>
				<view class="nav-item" @click="toPage('/pages/company/company')">
					<image src="../../static/icon/huobidanwei.png" class="nav-icon" mode="aspectFit"></image>
					<view class="nav-item-txt">{{"货币单位"|lang}}</view>
					<image src="../../static/icon/my-right.png" class="nav-icon-right"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myHeader from '@/components/myHeader.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		components:{myHeader},
		computed:{
			...mapState(["userInfo"])
		},
		methods: {
			
		}
	}
</script>

<style>
.user-wapper{
	height: 438rpx;
	background-image: url(../../static/img/my-bg.png);
	background-size: 100% 100%;
}
.user{
	display: flex;
	align-items: center;
	padding: 24rpx;
	font-size: 24rpx;
}
.nickname-wapper{
	margin-left: 12rpx;
}
.nickname{
	margin-bottom: 6rpx;
}
.page-content{
	padding: 0 25rpx;
	margin-top: -285rpx;
}
.sy-title{
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FF5D23;
	padding: 20rpx 0;
	line-height: 1em;
	font-weight: bold;
}
.sy-wapper{
	background-image: url(../../static/img/my-bg2.png);
	background-size: 100% 100%;
	height: 476rpx;
	color: #000;
	display: flex;
	flex-direction: column;
}
.num-wapper{
	display: flex;
	justify-content: center;
	border-bottom: 1px solid rgba(255, 255, 255, .4);
	padding: 0rpx 0 16rpx;
}
.num-item:last-child{
	margin-left: 30rpx;
}
.num{
	font-size: 24rpx
}
.btn-icon{
	width: 30rpx;
	height: 30rpx;
	margin-right: 10rpx;
}
.btn-wapper{
	display: flex;
	justify-content: space-between;
	flex: 1;
	align-items: center;
}
.btn{
	margin: 0;
	width: 200rpx;
	height: 75rpx;
	border-radius: 10rpx;
	background: #FFF;
	font-size: 24rpx;
}
.btn:first-child{
	background: #4B2EFF;
	color: #FFF;
}

.nav-wapper{
	background-color: #10074C;
	margin: 36rpx 0;
	padding-bottom: 75rpx;
	border-radius: 10rpx;
}
.nav-item{
	border-bottom: 1px solid #E2E2E2;
	padding: 36rpx 15rpx;
	display: flex;
	align-items: center;
	font-size: 24rpx;
}
.nav-icon{
	width: 50rpx;
	height: 50rpx;
}
.nav-icon-right{
	width: 30rpx;
	height: 30rpx;
}
.nav-item-txt{
	margin: 0 32rpx;
	flex: 1;
}
</style>
