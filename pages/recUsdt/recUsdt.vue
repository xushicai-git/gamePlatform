<template>
	<view class="content">
		<view class="cart">
			<view class="code-wapper">
				<image class="code-img" src="../../static/icon/MetaMask.png"></image>
			</view>
			<u-form labelPosition="top">
				<u-form-item label="" :border-bottom="false">
					<u-input input-align="right" value="bc1qhmjr5r6rgmdz0fkn9qhplpyl" :disabled="true" :border="2">
						<text slot="left" class="left">TRC20</text>
					</u-input>
				</u-form-item>
				<u-form-item label="充值金额" :border-bottom="false">
					<u-input value="20" :disabled="true" :border="2"></u-input>
				</u-form-item>
				<u-form-item label="充值地址" :border-bottom="false">
					<u-input value="bc1qhmjr5r6rgmdz0fkn9qhplpyl" :disabled="true" :border="2">
						<image @click="copy('123')" slot="right" src="../../static/icon/copy.png" class="copy-icon"></image>
					</u-input>
				</u-form-item>
			</u-form>
		</view>
		<view class="ts-wapper">
			<view class="ts-title">
				{{"注意"|lang}}:
			</view>
			<view class="ts-content">
				禁止向USDT[TRC20]地址充值除USDT[TRC20]之外的资产，任何非USDT[TRC20]资产充入USDT[TRC20]地址将不可到账并不可找回。
				充值时间为10-30分钟到账
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
		onReady() {
			this.setTitle("充值")
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.cart{
	background: #080231;
	padding: 0 10rpx;
	border-radius: 26rpx;
	padding-bottom: 75rpx;
	padding-top: 20rpx;
}
.content{
	padding: 0 30rpx;
	padding-bottom: 50rpx;
	margin-top: 30rpx;
}
.copy-icon{
	width: 41rpx;
	height: 44rpx;
	margin-left: 28rpx;
}
.left{
	color: #FFF;
}
.ts-wapper{
	font-size: 24rpx;
	margin-top: 18rpx;
	line-height: 1.9em;
}
.ts-title{
	color: #FF5D23;
}
.code-img{
	width: 260rpx;
	height: 260rpx;
}
.code-wapper{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 59rpx 0;
}
</style>
