<template>
	<view class="content">
		<view class="cart">
			<u-form labelPosition="top">
				<u-form-item label="货币" :border-bottom="false">
					<u-input @click="isShowAcCoin=true" :value="coinAc.name" :disabled="true" :border="2">
						<u-icon name="arrow-down" slot="right" color="#FFF"></u-icon>
					</u-input>
				</u-form-item>
				<u-form-item label="传输网络" :border-bottom="false">
					<u-input :value="chainAc.name" @click="isShowAcChain=true" :disabled="true" placeholder="请选择传输网络" :border="2">
						<u-icon name="arrow-down" slot="right" color="#FFF"></u-icon>
					</u-input>
					
				</u-form-item>
				<u-form-item label="钱包地址" :border-bottom="false">
					<u-input v-model="form.account" placeholder="请输入钱包地址" :border="2"></u-input>
				</u-form-item>
				<u-form-item label="交易密码" :border-bottom="false">
					<u-input type="password" v-model="form.dealPassword" placeholder="请输入交易密码" :border="2"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<u-action-sheet :list="coinList" @click="changeCoinList" v-model="isShowAcCoin"></u-action-sheet>
		<u-action-sheet :list="chainList" @click="changeChainList" v-model="isShowAcChain"></u-action-sheet>
		<btn @tab="submit" class="btn" type="or">{{"确定"|lang}}</btn>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coinAc:{},
				coinList:[],
				chainAc:{},
				chainList:[],
				isShowAcCoin:false,
				isShowAcChain:false,
				form:{
					account:"",
					bankId:"",
					dealPassword:""
				}
			}
		},
		async onLoad() {
			this.setTitle("账户")
			await this.getCoinList()
			this.getChainList()
		},
		onReady() {
		},
		methods: {
			async getCoinList(){
				let res = await this.ajax({
					url:'coin_list',
					method:"get",
					data:{type:1}
				})
				if(res.code==0){
					this.coinList = res.data.map(item=>{
						item.text = item.name
						return item
					})
					this.coinAc = this.coinList[0]
				}
			},
			async getChainList(){
				let res = await this.ajax({
					url:"coin_chainList",
					method:"get",
					data:{coinId:this.coinAc.id}
				})
				if(res.code==0){
					this.chainList = res.data.map(item=>{
						item.text = item.name
						return item
					})
				}
			},
			changeCoinList(i,item){
				this.coinAc = item
				this.chainAc = {}
				this.getChainList()
			},
			changeChainList(i,item){
				this.chainAc=item
			},
			async submit(){
				let res = await this.ajax({
					url:'wallet_addWalletAddress',
					loading:true,
					data:{
						...this.form,
						bankId:this.chainAc.id,
						coinId:this.chainAc.coinId
					}
				})
				if(res.code==0){
					this.tost("添加成功",()=>{
						uni.navigateBack()
					})
				}
			}
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
	position: absolute;
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
