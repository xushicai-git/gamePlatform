<template>
	<view>
		<view class="nav-wapper">
			<view class="nav-item" v-if="data.password=='edit'" @click="toPage('/pages/setPass/setPass',{title:'修改登录密码'})">
				<image src="../../static/icon/cahngepass3.png" class="nav-icon" mode="aspectFit"></image>
				<view class="nav-item-txt">{{"修改登录密码"|lang}}</view>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
			<view v-if="data.dealPassword=='edit'" class="nav-item" @click="toPage('/pages/transactionPassword/transactionPassword',{title:'修改交易密码'})">
				<image src="../../static/icon/changepass2.png" class="nav-icon" mode="aspectFit"></image>
				<view class="nav-item-txt">{{"修改交易密码"|lang}}</view>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
			<view v-else class="nav-item" @click="toPage('/pages/transactionPasswordSet/transactionPasswordSet',{title:'设置交易密码'})">
				<image src="../../static/icon/changepass2.png" class="nav-icon" mode="aspectFit"></image>
				<view class="nav-item-txt">{{"设置交易密码"|lang}}</view>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
			<view v-if="data.email=='set'" class="nav-item" @click="toPage('/pages/setMailboxSet/setMailboxSet')">
				<image src="../../static/icon/changepass.png" class="nav-icon" mode="aspectFit"></image>
				<view class="nav-item-txt">{{"设置电子邮箱"|lang}}</view>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
			<view v-else class="nav-item" @click="toPage('/pages/setMailbox/setMailbox')">
				<image src="../../static/icon/changepass.png" class="nav-icon" mode="aspectFit"></image>
				<view class="nav-item-txt">{{"修改电子邮箱"|lang}}</view>
				<view class="item-content">{{$store.state.userInfo.email}}</view>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				data:{},
			}
		},
		onShow() {
			this.getConfigStatus()
		},
		onReady() {
			this.setTitle("安全中心")
		},
		computed :{
			...mapState(["userInfo"])
		},
		methods: {
			// 账户密码邮箱状态
			async getConfigStatus(){
				let res = await this.ajax({
					url:"account_configStatus",
					method:"get",
				})
				if(res.code==0){
					this.data = res.data
				}
			}
		}
	}
</script>

<style scoped>
.nav-wapper{
	background-color: #10074C;
	margin: 25rpx;
	border-radius: 10rpx;
	padding: 0 20rpx;
}
.nav-item{
	border-bottom: 1px solid rgba(255, 255, 255, .4);
	padding: 36rpx 15rpx;
	display: flex;
	align-items: center;
	font-size: 24rpx;
}
.nav-item:last-child{
	border-bottom: none;
}
.nav-icon{
	width: 40rpx;
	height: 40rpx;
}
.nav-item-txt{
	margin: 0 32rpx;
	flex: 1;
}
.item-content{
	margin-right: 10rpx;
}
</style>
