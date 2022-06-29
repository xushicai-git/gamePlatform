<template>
	<view class="page">
		<statusBar></statusBar>
		<view class="title">
			{{"找回密码"|lang}}
		</view>
		<view class="content-wapper">
			<u-form >
				<u-form-item padding="0 0 20rpx" :border-bottom="false">
					<u-input placeholder="请输入您的电子邮箱" :preIcon="require('@/static/icon/youxiang.png')" height="75" :border="true"></u-input>
				</u-form-item >
				<u-form-item padding="0 0 20rpx" :border-bottom="false">
					<u-input placeholder="请输入邮箱验证码" :preIcon="require('@/static/icon/yanzhengma.png')" height="75" :border="true"></u-input>
					<sendCode></sendCode>
				</u-form-item >
				<u-form-item padding="0 0 20rpx" :border-bottom="false">
					<u-input placeholder="6-18位英文、数字或符号的组合" :preIcon="require('@/static/icon/password.png')" height="75" :border="true"></u-input>
				</u-form-item >
				<u-form-item padding="0 0 120rpx" :border-bottom="false">
					<u-input placeholder="重复输入密码" :preIcon="require('@/static/icon/password.png')" height="75" :border="true"></u-input>
				</u-form-item >
			</u-form>
			<btn>{{"设置新密码"|lang}}</btn>
		</view>
	</view>
</template>

<script>
	import sendCode from '@/components/sendCode.vue'
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
.page{
	padding: 80rpx 0 148rpx;
}
.title{
	margin:0 62rpx 290rpx;
	font-size: 46rpx;
	color: #9377FF;
}
.content-wapper{
	padding: 0 80rpx;
}
</style>
