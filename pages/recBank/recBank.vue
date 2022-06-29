<template>
	<view class="content">
		<view class="cart">
			<u-form labelPosition="top">
				<u-form-item label="银行" :border-bottom="false">
					<u-input input-align="right" value="工商银行" :disabled="true" :border="2">
						<image slot="right" src="../../static/icon/copy.png" class="copy-icon"></image>
					</u-input>
				</u-form-item>
				<u-form-item label="银行账户" :border-bottom="false">
					<u-input input-align="right" value="12223444556666" :disabled="true" :border="2">
						<image slot="right" src="../../static/icon/copy.png" class="copy-icon"></image>
					</u-input>
				</u-form-item>
				<u-form-item label="姓名" :border-bottom="false">
					<u-input input-align="right" value="某某" :disabled="true" :border="2">
						<image slot="right" src="../../static/icon/copy.png" class="copy-icon"></image>
					</u-input>
				</u-form-item>
				<u-form-item label="存款金额" :border-bottom="false">
					<u-input input-align="right" value="$900.00" :disabled="true" :border="2">
						<image slot="right" src="../../static/icon/copy.png" class="copy-icon"></image>
					</u-input>
				</u-form-item>
				<u-form-item label="收到金额" :border-bottom="false">
					<u-input input-align="right" value="$900.00" :disabled="true" :border="2">
					</u-input>
				</u-form-item>	
				<u-form-item label="汇率" :border-bottom="false">
					<u-input input-align="right" value="$900.00=1USDT" :disabled="true" :border="2">
					</u-input>
				</u-form-item>
				<u-form-item label="到账时间" :border-bottom="false">
					<u-input input-align="right" value="2022/6/17 22:12" :disabled="true" :border="2">
					</u-input>
				</u-form-item>
			</u-form>
		</view>
		<btn class="btn" type="or">{{"已支付"|lang}}</btn>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			this.setTitle("存款单")
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
.btn{
	margin-top: 60rpx;
}
</style>
