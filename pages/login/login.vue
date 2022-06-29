<template>
	<view class="page">
		<statusBar></statusBar>
		<view class="title">
			{{"欢迎登录"|lang}}!
		</view>
		<view class="content-wapper">
			<view class="logo-wapper">
				<image src="@/static/img/hi.png" class="hi" mode=""></image>
				<image src="@/static/img/logo.png" class="logo" mode=""></image>
			</view>
			<view class="tab-wapper">
				<view @click="changeTab(0)" :class="['tab-item',tabIndex==0?'tab-item-ac':'']">{{"登录"|lang}}</view>
				<view @click="changeTab(1)" :class="['tab-item',tabIndex==1?'tab-item-ac':'']">{{"注册"|lang}}</view>
			</view>
			
			
			<!-- 登录表单 -->
			<view class="login-page" v-show="tabIndex==0">
				<u-form ref="loginForm" :model="loginForm">
					<u-form-item prop="userName" padding="0 0 20rpx" :border-bottom="false">
						<u-input v-model="loginForm.userName" placeholder="请输入邮箱" :preIcon="require('@/static/icon/user.png')" height="75" :border="true"></u-input>
					</u-form-item >
					<u-form-item prop="password" padding="0 0 90rpx"  :border-bottom="false">
						<u-input v-model="loginForm.password" placeholder="请输入密码" :preIcon="require('@/static/icon/password.png')" type="password" height="75" :border="true"></u-input>
					</u-form-item>
				</u-form>
				<view class="jz-wapper">
					<u-checkbox v-model="isRemember" size="34">
						<text class="jz">{{ "记住用户名" | lang}}</text>
					</u-checkbox>
				</view>
				<btn @tab="login">{{"立即登录"|lang}}</btn>
				<view class="wj" @click="toPage('/pages/retrievePassword/retrievePassword')">{{ "忘记了密码" | lang}}</view>
			</view>
			
			<!-- 注册表单 -->
			<view class="reg-page" v-show="tabIndex==1">
				<u-form ref="registerForm" :model="registerForm">
					<u-form-item prop="email" padding="0 0 20rpx" :border-bottom="false">
						<u-input v-model="registerForm.email" placeholder="请输入您的电子邮箱" :preIcon="require('@/static/icon/youxiang.png')" height="75" :border="true"></u-input>
					</u-form-item >
					<u-form-item prop="code" padding="0 0 20rpx" :border-bottom="false">
						<u-input v-model="registerForm.code" placeholder="请输入图片验证码" :preIcon="require('@/static/icon/yanzhengma.png')" height="75" :border="true">
							<image @click="getCodeImg" v-if="codeImg" class="code-img" slot="right" :src="codeImg"></image>
						</u-input>
					</u-form-item >
					<u-form-item prop="pcode" padding="0 0 20rpx" :border-bottom="false">
						<u-input v-model="registerForm.pcode" placeholder="请输入邮箱验证码" :preIcon="require('@/static/icon/yanzhengma.png')" height="75" :border="true"></u-input>
						<sendCode :email="registerForm.email"></sendCode>
					</u-form-item >
					<u-form-item prop="password" padding="0 0 20rpx" :border-bottom="false">
						<u-input type="password" v-model="registerForm.password" placeholder="6-18位英文、数字或符号的组合" :preIcon="require('@/static/icon/password.png')" height="75" :border="true"></u-input>
					</u-form-item >
					<u-form-item prop="password2" padding="0 0 20rpx" :border-bottom="false">
						<u-input type="password" v-model="registerForm.password2" placeholder="重复输入密码" :preIcon="require('@/static/icon/password.png')" height="75" :border="true"></u-input>
					</u-form-item >
					<u-form-item prop="recommendCode" padding="0 0 90rpx" :border-bottom="false">
						<u-input v-model="registerForm.recommendCode" placeholder="请输入邀请码" :preIcon="require('@/static/icon/user.png')" height="75" :border="true"></u-input>
					</u-form-item >
				</u-form>
				<view :class="['jz-wapper',is18?'no':'']" style="margin-bottom: 10rpx;">
					<u-checkbox v-model="registerForm.is18" size="34">
						<text class="jz">{{ "我确认我已年满18岁" | lang}}</text>
					</u-checkbox>
				</view>
				<view :class="['jz-wapper',isYy?'no':'']">
					<u-checkbox v-model="registerForm.isYy" size="34">
						<text class="jz">{{ "我已阅读并接受《服务条款》" | lang}}</text>
					</u-checkbox>
				</view>
				<btn @tab="register">{{"立即注册"|lang}}</btn>
			</view>
			
			
			
			<view class="sf">
				<text>{{"第三方"|lang}}</text>
			</view>
			<view class="bottom-icon-wapper">
				<image @click="loginS(item)" v-for="(item,index) in loginList" :src="item.icon" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import sendCode from '@/components/sendCode.vue'
	import config from '@/common/config.js'
	import Web3 from 'web3'
	export default {
		data() {
			return {
				loginList:[],
				codeImg:"",
				tabIndex:0,
				is18:false,
				isYy:false,
				isRemember:true,
				loginRules:{
					userName:[
						{
							required: true,
							message: this.getLang('请输入邮箱')
						},
						{
							type:"email",
							message: this.getLang('请输入正确的邮箱格式')
						}
					],
					password:{
						required: true,
						message: this.getLang('请输入密码')
					}
				},
				regRules:{
					email:[
						{
							required: true,
							message: this.getLang('请输入您的电子邮箱')
						},
						{
							type:"email",
							message: this.getLang('请输入正确的邮箱格式')
						}
					],
					code:{
						required: true,
						message: this.getLang('请输入图片验证码')
					},
					pcode:{
						required: true,
						message: this.getLang('请输入邮箱验证码')
					},
					password:{
						required: true,
						message: this.getLang('请输入您的密码')
					},
					password2:{
						required: true,
						message: this.getLang('请再次输入您的密码')
					},
				},
				loginForm:{
					userName:"",
					password:""
				},
				registerForm:{
					email:"",
					password:"",
					password2:"",
					code:"",
					recommendCode:"PMUQN2MG",
					pcode:"",
					is18:true,
					isYy:true,
				}
			}
		},
		components:{sendCode},
		onLoad() {
			this.getLoginList()
		},
		onReady() {
			this.$refs.loginForm.setRules(this.loginRules);
			this.$refs.registerForm.setRules(this.regRules);
		},
		methods: {
			changeTab(index){
				this.tabIndex = index
				this.getCodeImg()
			},
			
			// 获取第三方登录列表
			async getLoginList(){
				let res = await this.ajax({
					url:"third_list"
				})
				if(res.code==0){
					this.loginList = res.data
				}
			},
			
			// metaMask登录
			async metaMaskLogin(id){
				if(!window.ethereum){
					uni.navigateTo({
						url:"/pages/downLoadMetaMask/downLoadMetaMask"
					})
					return
				}
				const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
				const account = accounts[0];
				let res = await this.ajax({
					url:"third_nonce",
					method:"get",
					loading:true,
					data:{
						address:account
					}
				})
				if(res.code==0){
					let nonce = res.data
					let web3 = new Web3(ethereum)
					const coinbase = await web3.eth.getCoinbase()
					const sign = await web3.eth.personal.sign(web3.utils.utf8ToHex(nonce),coinbase,nonce)
					// const dec = await web3.eth.personal.ecRecover(nonce,sign)
					await this.thirdLogin({
						id,
						recommendCode:"PMUQN2MG",
						code:"",
						address:account,
						signature:sign,
					})
				}
			},
			
			// 第三方登录
			async loginS(item){
				if(item.type=="metamask"){
					this.metaMaskLogin(item.id)
				}else{
					this.thirdGetUrl(item.id)
				}
			},
			
			
			// 第三方登录
			async thirdLogin(data){
				let res = await this.ajax({
					url:"third_login",
					data
				})
				this.loginSuccessful(res)
			},
			
			
			// 登录
			async login(){
				this.$refs.loginForm.validate(async v => {
					if(v){
						let res = await this.ajax({
							url:"login",
							loading:true,
							data:this.loginForm
						})
						this.loginSuccessful(res)
					}
				});
				
			},
			
			// 登录成功
			loginSuccessful(res){
				if(res.code==0){
					uni.setStorageSync("token",res.data)
					this.$store.dispatch("setUserInfo")
					this.tost("登录成功",()=>{
						uni.redirectTo({
							url:"/pages/index/index"
						})
					})
				}
			},
			
			
			// 三方登陆获取授权url
			async thirdGetUrl(id){
				let res = await this.ajax({
					url:"third_getUrl",
					method:"get",
					data:{id}
				})
				if(res.code==0){
					this.toPageAll(res.data)
				}
			},
			
			
			// 注册
			async register(){
				this.$refs.registerForm.validate(async v => {
					if (v) {
						if(this.registerForm.password!=this.registerForm.password2){
							this.tost("两次密码输入不一致")
							return
						}
						if(!this.registerForm.is18){
							this.is18 = true
							setTimeout(()=>{
								this.is18 = false
							},500)
							return
						}
						if(!this.registerForm.isYy){
							this.isYy = true
							setTimeout(()=>{
								this.isYy = false
							},500)
							return
						}
						let res = await this.ajax({
							url:"register",
							loading:true,
							data:this.registerForm
						})
						if(res.code==0){
							this.tost("注册成功")
							this.tabIndex = 0
						}
					}
				});
			},
			
			// 获取图片验证码
			async getCodeImg(){
				this.codeImg = config.rootUrl + this.api.index_captcha + "?num="+Math.random()
			}
		}
	}
</script>

<style scoped>
.page{
	padding: 80rpx 0 148rpx;
}
.title{
	margin:0 62rpx 46rpx;
	font-size: 46rpx;
	color: #9377FF;
}
.logo{
	width:237rpx;
	height:215rpx;
	
}
.content-wapper{
	padding: 0 80rpx;
}
.tab-wapper{
	display: flex;
	margin: 0 auto;
	width: 358rpx;
	height: 71rpx;
	background-color: #fff;
	color: #333;
	border-radius: 100vh;
	margin-bottom: 90rpx;
	overflow: hidden;
}
.tab-item{
	flex: 1;
	transition: all .5s;
	font-size: 28rpx;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.tab-item-ac{
	background-color: #6000FF;
	color: #FFF;
	border-radius: 100vh;
}
.jz{
	font-size: 28rpx;
	display: flex;
	align-items: center;
}
@keyframes no{
	0%{
		transform: translateX(0rpx);
	}50%{
		transform: translateX(20rpx);
	}100%{
		transform: translateX(0);
	}
}
.jz-wapper{
	margin-bottom: 44rpx;
}
.no{
	animation: no .25s infinite linear;
}

.wj{
	margin-top: 36rpx;
	font-size: 28rpx;
	color: #999999;
}
.sf{
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #262046;
	height: 1px;
	margin-top: 111rpx;
	margin-bottom: 100rpx;
	font-size: 28rpx;
}
.sf text{
	background-color: #04001F;
	padding: 0 20rpx;
}
.bottom-icon-wapper{
	display: flex;
	justify-content: space-around;
	padding: 0 80rpx;
}
.bottom-icon-wapper image{
	width: 70rpx;
	height: 70rpx;
}
.code-img{
	width: 135rpx;
	height: 60rpx;
	margin-left: 30rpx;
}
.logo-wapper{
	position: relative;
	width:237rpx;
	height:215rpx;
	margin: auto;
	margin-bottom: 128rpx;
	display: flex;
	align-items: center;
}
.hi{
	width: 47rpx;
	height: 44rpx;
	position: absolute;
	left: 0;
	transform: translateX(-100%);
}
</style>
