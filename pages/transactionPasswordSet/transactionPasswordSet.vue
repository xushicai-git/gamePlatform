<template>
	<view class="content">
		<view class="cart">
			<u-form labelPosition="top" ref="form" :model="form">
				<u-form-item prop="dealPassword" label="密码" :border-bottom="false">
					<u-input type="password" v-model="form.dealPassword" placeholder="请输入密码" :border="2"></u-input>
				</u-form-item>
				<u-form-item prop="dealPassword2" label="确认密码" :border-bottom="false">
					<u-input type="password" v-model="form.dealPassword2" placeholder="请再次输入密码" :border="2"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<btn class="btn" @tab="submit()">{{"保存"|lang}}</btn>
	</view>
</template>

<script>
	import sendCode from '@/components/sendCode.vue'
	export default {
		data() {
			return {
				title: "",
				form:{
					dealPassword:"",
					dealPassword2:"",
				},
				rules:{
					dealPassword:{
						required: true,
						message: this.getLang('请输入密码')
					},
					dealPassword2:{
						required: true,
						message: this.getLang('请再次输入密码')
					}
				},
			}
		},
		components:{sendCode},
		onLoad() {
			this.setTitle("设置交易密码")
		},
		onReady() {
			this.$refs.form.setRules(this.rules);
		},
		methods: {
			submit(){
				this.$refs.form.validate(async v=>{
					if(v){
						if(this.form.dealPassword!=this.form.dealPassword2){
							this.tost("两次密码不一致")
							return
						}
						let res = await this.ajax({
							url:"account_setDealPwd",
							loading:true,
							data:{
								dealPassword:this.form.dealPassword
							}
						})
						if(res.code==0){
							this.tost("密码设置成功",()=>{
								uni.navigateBack()
							})
						}
					}
					
				})
			},
		}
	}
</script>

<style>
.content{
	padding: 0 30rpx;
	padding-bottom: 180rpx;
	margin-top: 30rpx;
}
.btn{
	background: linear-gradient(91deg, #CD641B, #CD4B1B);
	border-radius: 27rpx;
	height: 80rpx;
	position: fixed;
	width: 690rpx;
	bottom: 70rpx;
}
.cart{
	background: #080231;
	padding: 0 10rpx;
	border-radius: 26rpx;
	padding-bottom: 75rpx;
	padding-top: 20rpx;
}
</style>
