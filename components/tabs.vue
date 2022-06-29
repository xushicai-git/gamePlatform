<template>
	<view class="tabs">
		<view @click="tabItem(index)" :class="['tabs-item', ac==index?'tabs-item-ac':'']" v-for="(item,index) in list">
			{{item.name|lang}}
		</view>
	</view>
</template>

<script>
	export default {
		props:["list"],
		name:"tabs",
		data() {
			return {
				ac:0,
			};
		},
		methods:{
			tabItem(index){
				this.ac = index
				this.$emit("changeIndex",index)
			}
		}
	}
</script>

<style scoped>
.tabs{
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #04001F;
	margin-bottom: 30rpx;
	padding-top: 10rpx;
}
.tabs-item{
	padding: 20rpx 0;
	position: relative;
}
.tabs-item-ac{
	color: #FF5D23;
}
.tabs-item-ac::after{
	display: block;
	content: "";
	width: 100%;
	bottom: 0;
	height: 8rpx;
	background-color: #FF5D23;
	border-radius: 100vh;
	position: absolute;
}
</style>