<template>
	<view class="content">
		<view class="cart">
			<u-form labelPosition="top" ref="form" :rules="rules" :model="form">
				<u-form-item prop="email2" label="当前电子邮箱" :border-bottom="false">
					<u-input v-model="form.email2" placeholder="请输入当前电子邮箱" :border="2"></u-input>
				</u-form-item>
				<u-form-item prop="email" label="电子邮箱" :border-bottom="false">
					<u-input v-model="form.email" placeholder="请输入电子邮箱" :border="2"></u-input>
				</u-form-item>
				<u-form-item prop="code" label="验证码" :border-bottom="false">
					<u-input v-model="form.code" placeholder="请输入验证码" :border="2"></u-input>
					<sendCode :email="form.email"  inputClass="input-btn2"></sendCode>
				</u-form-item>
				<u-form-item prop="password" label="登录密码" :border-bottom="false">
					<u-input type="password" v-model="form.password" placeholder="请输入登录密码" :border="2"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<btn class="btn" @tab="submit">{{"保存"|lang}}</btn>
	</view>
</template>

<script>
	import sendCode from '@/components/sendCode.vue'
	export default {
		data() {
			return {
				form:{
					email2:"",
					email:"",
					code:"",
					password:'',
				},
				rules:{
					email2:[
						{
							required: true,
							message: this.getLang('请输入当前电子邮箱')
						},
						{
							type:"email",
							message: this.getLang('请输入正确的邮箱格式')
						}
					],
					email:[
						{
							required: true,
							message: this.getLang('请输入电子邮箱')
						},
						{
							type:"email",
							message: this.getLang('请输入正确的邮箱格式')
						}
					],
					code:{
						required: true,
						message: this.getLang('请输入验证码')
					},
					password:{
						required: true,
						message: this.getLang('请输入登录密码')
					},
				},
			}
		},
		components:{sendCode},
		onLoad() {
			this.setTitle("设置电子邮箱")
		},
		onReady() {
			this.$refs.form.setRules(this.rules);
		},
		methods: {
			submit(){
				this.$refs.form.validate(async v=>{
					if(v){
						if(this.form.email2==this.$store.state.userInfo.email){
							this.tost("当前电子邮箱不正确")
							return
						}
						let res = await this.ajax({
							url:"account_editEmail",
							loading:true,
							data:this.form
						})
						if(res.code==0){
							this.tost("修改成功",()=>{
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
