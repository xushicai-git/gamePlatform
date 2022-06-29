<template>
	<view>
		<u-navbar back-icon-color="#FFF" title-color="#FFF" :title="'充值'|lang" :background="{background:'#190062'}" :border-bottom="false">
			<image slot="right" @click="toPage('/pages/rechargeLog/rechargeLog')" class="icon-edit" src="../../static/icon/bijiben.png"></image>
		</u-navbar>
		<tabs :list="list" @changeIndex="changeIndex"></tabs>
		<view class="content" >
			<view class="cart">
				<u-form labelPosition="top" v-if="ac==0">
					<u-form-item label="选择货币" :border-bottom="false">
						<u-input :disabled="true" value="USDT" :border="2">
							<image class="icon" slot="left" src="../../static/img/bi1.png"></image>
							<u-icon name="arrow-down" slot="right" color="#FFF"></u-icon>
						</u-input>
					</u-form-item>
					<u-form-item label="传输网络1" :border-bottom="false">
						<view @click="usdtAc=0" :class="['usdt-change-item',usdtAc==0?'usdt-change-item-ac':'']">ERC20</view>
						<view @click="usdtAc=1" :class="['usdt-change-item',usdtAc==1?'usdt-change-item-ac':'']">TR20</view>
					</u-form-item>
					<u-form-item label="存款金额" :border-bottom="false">
						<u-input placeholder="请输入存款金额" :border="2"></u-input>
					</u-form-item>
				</u-form>
				
				
				
				<u-form labelPosition="top" v-if="ac==1">
					<u-form-item label="存款金额" :border-bottom="false">
						<u-input placeholder="请输入存款金额" :border="2">
							<text slot="right" class="right">USDT</text>
						</u-input>
					</u-form-item>
					<u-form-item label="存款金额" :border-bottom="false">
						<u-input placeholder="请输入存款金额" :border="2">
							<view slot="right" class="right">
								<text style="margin-right: 10rpx;">JPY</text>
								<u-icon name="arrow-down" color="#FFF"></u-icon>
							</view>
						</u-input>
					</u-form-item>
				</u-form>
			</view>
			<btn @tab="submit" class="btn" type="or">{{"下一步"|lang}}</btn>
		</view>
	</view>
</template>

<script>
	import tabs from '@/components/tabs.vue'
	export default {
		data() {
			return {
				usdtAc:0,
				ac:0,
				list:[
					{name:"数字钱包"},
					{name:"法定货币"}
				]
			}
		},
		components:{tabs},
		onLoad() {
			this.getCoinList()
		},
		methods: {
			changeIndex(index){
				this.ac=index
			},
			
			// 充值币种列表
			async getCoinList(){
				let res = await this.ajax({
					url:"recharge_coinList",
					method:"get",
					data:{type:1}
				})
				if(res.code==0){
					console.log(res)
				}
			},
			
			submit(){
				if(this.ac!=0){
					this.toPage("/pages/recBank/recBank")
				}else{
					this.toPage("/pages/recUsdt/recUsdt")
				}
			}
		}
	}
</script>

<style scoped>
.icon-edit{
	width: 36rpx;
	height: 36rpx;
	margin-right: 25rpx;
}
.content{
	padding: 0 30rpx;
	padding-bottom: 180rpx;
	margin-top: 30rpx;
}
.btn{
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
.icon{
	width: 48rpx;
	height: 48rpx;
	margin-right: 20rpx;
}
.right-wapper{
	display: flex;
	align-items: center;
	color: #FFF;
}
.icon-txt{
	margin-left: 20rpx;
	margin-right: 10rpx;
}
.kyye{
	font-size: 24rpx;
	text-align: right;
	margin-bottom: 10rpx;
	margin-top: -4rpx;
}
.right,.right text{
	color: #FFF;
	font-size: 32rpx;
}
.usdt-change-item{
	width: 189rpx;
	height: 74rpx;
	background: #10074C;
	border-radius: 25rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFF;
	margin-right: 20rpx;
}
.usdt-change-item-ac{
	background-color: #CD4B1B;
}
</style>
