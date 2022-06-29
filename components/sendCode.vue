<template>
	<view>
		<view @click="sendCode" :class="['input-btn',inputClass]">{{num?num:""}}{{txt|lang}}</view>
		<u-verification-code :seconds="seconds" changeText="X" endText="none" ref="uCode" @change="codeChange"></u-verification-code>
	</view>
</template>

<script>
	export default {
		name:"sendCode",
		props:["inputClass","email"],
		data() {
			return {
				seconds:60,
				num:0,
				txt:'发送验证码'
			};
		},
		methods:{
			codeChange(e){
				if(e=="none"){
					this.txt='发送验证码'
					this.num = 0
				}else if(e>=0){
					this.txt = '秒后发送'
					this.num = e
				}
			},
			async sendCode(){
				if(this.num==0){
					let res = await this.ajax({
						url:"index_sendEmailCode",
						loading:true,
						data:{
							email:this.email
						}
					})
					if(res.code==0){
						this.$refs.uCode.start()
					}
				}
			},
		}
	}
</script>

<style scoped>
.input-btn{
	height: 70rpx;
	border-radius: 10px;
	border: 8rpx solid rgb(47, 46, 82);
	background-color: #312E46;
	color: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: content-box;
	padding: 0 16rpx;
	font-size: 28rpx;
	margin-left: 10rpx;
	color: #c0c4cc;
}
.input-btn2{
	height: 70rpx;
	border-radius: 10px;
	border: 8rpx solid #190062;
	background-color: #190062;
	color: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: content-box;
	padding: 0 16rpx;
	font-size: 28rpx;
	margin-left: 10rpx;
}
</style>