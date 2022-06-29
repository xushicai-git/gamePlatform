<template>
	<view>
		<tabs class="tabs" @changeIndex="changeIndex" :list="list"></tabs>
		<view class="content-wapper">
			<view v-if="ac==0">
				<view :class="['cart',index%2==0?'cart2':'']" v-for="item,index in bankList">
					<view class="title">{{item.code}}</view>
					<view class="num">{{item.account}}</view>
					<view class="name">{{item.bankName}}</view>
					<image @click="delBank(item.id,index)" class="del-icon" src="../../static/icon/del.png"></image>
				</view>
				<none v-if="bankList.length==0"></none>
				<btn class="btn" type="or" @tab="toPage('/pages/addBank/addBank')">{{"添加银行账户"|lang}}</btn>
			</view>
			
			<view v-else>
				<view class="cart cart-usdt" :class="['cart',index%2==0?'cart2':'']" v-for="item,index in walletList" :key="index">
					<view class="title">{{item.bankName}}</view>
					<view class="num">{{item.account}}</view>
					<image @click="delWallet(item.id,index)" class="del-icon" src="../../static/icon/del.png"></image>
				</view>
				<none v-if="walletList.length==0"></none>
				<btn class="btn" type="or" @tab="toPage('/pages/addUsdt/addUsdt')">{{"添加USDT账户"|lang}}</btn>
			</view>
		</view>
		<model ref="model"></model>
	</view>
</template>

<script>
	import tabs from '@/components/tabs.vue'
	export default {
		data() {
			return {
				ac:0,
				bankList:[],
				walletList:[],
				list:[
					{name:"银行账户",list:[]},
					{name:"钱包地址",list:[]}
				]
			}
		},
		components:{tabs},
		onReady() {
			this.setTitle("账户")
		},
		onShow() {
			this.getBankList()
			this.getWalletList()
		},
		methods: {
			async delWallet(id,index){
				let confirm = await this.$refs.model.show({content:"是否删除钱包?"})
				if(confirm){
					let res = await this.ajax({
						url:"wallet_deleteWalletAddress",
						loading:true,
						data:{walletAddressId:id}
					})
					if(res.code==0){
						this.walletList.splice(index,1)
					}
				}
			},
			async delBank(id,index){
				let confirm = await this.$refs.model.show({content:"是否删除银行卡?"})
				if(confirm){
					let res = await this.ajax({
						url:"bank_deleteBankInfo",
						loading:true,
						data:{bankInfoId:id}
					})
					if(res.code==0){
						this.bankList.splice(index,1)
					}
				}
			},
			async getBankList(){
				let res = await this.ajax({
					url:"bank_getBankInfos"
				})
				if(res.code==0){
					this.bankList = res.data
				}
			},
			async getWalletList(){
				let res = await this.ajax({
					url:"wallet_getWalletAddress"
				})
				if(res.code==0){
					this.walletList = res.data
				}
			},
			changeIndex(index){
				this.ac = index
			}
		}
	}
</script>

<style scoped>

.content-wapper{
	padding: 0 30rpx;
}
.cart{
	height: 282rpx;
	box-sizing: border-box;
	background-image: url(@/static/img/cart-bg1.png);
	background-size: 100% 100%;
	margin-bottom: 30rpx;
	padding: 38rpx 48rpx 62rpx;
	font-size: 32rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
}
.cart-usdt{
	display: block;
}
.cart-usdt .title{
	margin-bottom: 30rpx;
}
.cart2{
	background-image: url(@/static/img/cart-bg2.png);
}
.btn{
	margin: 80rpx 0;
}
.del-icon{
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	bottom: 30rpx;
	right: 30rpx;
}
</style>
