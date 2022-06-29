<template>
	<view class="msg-item-wapper" @click="tabItem">
		<view class="title">{{title}}</view>
		<view class="msg-content" v-html="content"></view>
		<image mode="aspectFill" v-if="false" class="cover" src="https://img2.baidu.com/it/u=924133470,1725987117&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"></image>
		<view class="time">{{time}}</view>
	</view>
</template>

<script>
	export default {
		name:"msgItem",
		props:["content","title","time"],
		data() {
			return {
				
			};
		},
		methods:{
			tabItem(){
				this.$emit("tabItem")
			}
		}
	}
</script>

<style scoped>
.msg-item-wapper{
	background: #080231;
	border-radius: 26rpx;
	padding: 18rpx 30rpx;
	margin-bottom: 25rpx;
}
.cover{
	height: 224rpx;
	margin-bottom: 10rpx;
	border-radius: 10rpx;
}
.time{
	font-size: 24rpx;
	color: #B5B4BB;
	text-align: right;
}
.msg-content{
	font-size: 24rpx;
	margin-bottom: 26rpx;
}
.title{
	margin-bottom: 12rpx;
}
</style>