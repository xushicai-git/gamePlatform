<template>
	<view @click="tab" :class="[
		'__btn',
		type=='or'?'__btn-or':''
	]">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"btn",
		props:["type","login"],
		data() {
			return {
				
			};
		},
		methods:{
			tab(){
				if(this.login&&!this.isLogin()){
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}else{
					this.$emit('tab')
				}
			}
		}
	}
</script>

<style scoped>
.__btn{
	background-color: red;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20rpx 40rpx;
	border-radius: 100vh;
	opacity: 1;
	transition: all .2s;
	background: linear-gradient(84deg, #B525FF, #2C31FF);
	white-space: nowrap;
}
.__btn:active{
	opacity: .6;
}
.__btn-or{
		background: linear-gradient(91deg, #CD641B, #CD4B1B);
		border-radius: 27rpx;
		height: 80rpx;
}
</style>