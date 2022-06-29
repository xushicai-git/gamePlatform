<template>
	<view class="content">
		<view class="cart">
			<u-form labelPosition="top">
				<u-form-item label="账户名称" :border-bottom="false">
					<u-input v-model="form.accountName" placeholder="请输入账户名称" :border="2"></u-input>
				</u-form-item>
				<u-form-item label="用户名" :border-bottom="false" v-show="$store.state.userInfo.email">
					<u-input :disabled="true" :value="$store.state.userInfo.email" placeholder="请输入用户名" :border="2"></u-input>
				</u-form-item>
				<u-form-item label="银行名称" :border-bottom="false">
					<u-input :value="acBank.name" @click="getBankList" :disabled="true" placeholder="请选择银行名称" :border="2">
						<u-icon name="arrow-down" slot="right" color="#FFF"></u-icon>
					</u-input>
				</u-form-item>
				<u-form-item label="银行账户" :border-bottom="false">
					<u-input v-model="form.account" placeholder="请输入银行账户" :border="2"></u-input>
				</u-form-item>
				<u-form-item label="交易密码" :border-bottom="false">
					<u-input type="password" v-model="form.dealPassword" placeholder="请输入交易密码" :border="2"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<btn class="btn" @tab="submit" type="or">{{"确定"|lang}}</btn>
		<model ref="model"></model>
		<u-action-sheet :list="acList" @click="changeBank" v-model="isShowAc"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankList:[],
				acList:[],
				isShowAc:false,
				acBank:{},
				form:{
					account:"",
					accountName:"",
					bankId:"",
					dealPassword:"",
					coinId:""
				}
			}
		},
		onLoad() {
			this.setTitle("账户")
		},
		methods: {
			async submit(){
				let res = await this.ajax({
					url:"bank_addBankInfo",
					loading:true,
					data:this.form
				})
				if(res.code==0){
					this.tost("添加成功",()=>{
						uni.navigateBack()
					})
				}
			},
			changeBank(i,item){
				this.form.bankId = item.id
				this.form.coinId = item.coinId
				this.acBank = item
			},
			async getBankList(){
				if(!this.$store.state.userInfo.coinId){
					let confirm = await this.$refs.model.show({content:"您还没设置货币单位是否前去设置？"})
					if(confirm){
						uni.navigateTo({
							url:"/pages/company/company"
						})
					}
					return
				}
				if(this.acList[0]){
					this.isShowAc = true
					return
				}
				let res = await this.ajax({
					url:'coin_bankList',
					method:"get",
					loading:true,
					data:{coinId:this.$store.state.userInfo.coinId}
				})
				if(res.code==0){
					this.isShowAc = true
					this.acList = res.data.map(item=>{
						return {
							...item,
							text: item.name,
						}
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
