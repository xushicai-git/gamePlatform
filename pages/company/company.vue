<template>
	<view class="page">
		<view class="cart">
			<view @click="setCoin(item,index)" :class="['item',index==ac?'ac':'']" v-for="(item,index) in list" :key="item.id">
				<text>{{item.name}}</text>
				<image class="ac-icon " src="../../static/icon/xuanze.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				ac:null
			}
		},
		onReady() {
			this.setTitle("货币单位")
		},
		onLoad() {
			this.getCoinList()
		},
		methods: {
			async setCoin(item,index){
				let res = await this.ajax({
					url:"account_setCoin",
					data:{coinId:item.id}
				})
				if(res.code==0){
					this.ac = index
				}
			},
			async getCoinList(){
				let res = await this.ajax({
					url:'coin_list',
					method:"get",
					data:{type:2}
				})
				if(res.code==0){
					res.data.forEach( (item,index)=>{
						if(item.id==this.$store.state.userInfo.coinId){
							this.ac=index
						}
					})
					this.list = res.data
				}
			},
		}
	}
</script>

<style>
.page{
	padding: 0 25rpx;
}
.cart{
	background-color: #080231;
	padding: 10rpx 10rpx 120rpx;
	margin: 25rpx 0;
	border-radius: 26rpx;
}
.ac-icon{
	width: 50rpx;
	height: 50rpx;
	display: none;
}
.item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 88rpx;
	background-color: #2F2E52;
	border-radius: 25rpx;
	padding: 0 25rpx;
	margin-bottom: 25rpx;
	border: 2px solid #2F2E52;
}
.ac{
	border: 2px solid #FFF;
}
.ac .ac-icon{
	display: block;
}
</style>
