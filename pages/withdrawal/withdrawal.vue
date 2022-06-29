<template>
	<view>
		<u-navbar back-icon-color="#FFF" title-color="#FFF" :title="'提现'|lang" :background="{background:'#190062'}" :border-bottom="false">
			<image slot="right" @click="toPage('/pages/withdrawalLog/withdrawalLog')" class="icon-edit" src="../../static/icon/bijiben.png"></image>
		</u-navbar>
		<tabs :list="list" @changeIndex="changeIndex"></tabs>
		<view class="content" >
			<view class="cart">
				<u-form labelPosition="top" v-if="ac==0">
					<u-form-item label="取款金额" :border-bottom="false">
						<u-input placeholder="请输入取款金额" :border="2">
							<view class="right-wapper" slot="right">
								<image class="icon" src="../../static/img/bi1.png"></image>
								<text class="icon-txt">USDT</text>
								<u-icon name="arrow-down" color="#FFF"></u-icon>
							</view>
						</u-input>
						
					</u-form-item>
					<view class="kyye">可用余额222.000USDT</view>
					<u-form-item label="钱包地址" :border-bottom="false">
						<u-input placeholder="请输入钱包地址" :border="2">
							<image slot="right" class="icon" src="../../static/icon/addicon.png"></image>
						</u-input>
						
					</u-form-item>
					<u-form-item label="交易密码" :border-bottom="false">
						<u-input placeholder="请输入交易密码" :border="2"></u-input>
					</u-form-item>
				</u-form>
				
				
				
				<u-form labelPosition="top" v-if="ac==1">
					<u-form-item label="账户" :border-bottom="false">
						<u-input placeholder="请输入账户" :border="2"></u-input>
					</u-form-item>
					<u-form-item label="取款金额" :border-bottom="false">
						<u-input placeholder="请输入取款金额" :border="2">
							<text slot="right" class="right">USDT</text>
						</u-input>
					</u-form-item>
					<view class="kyye">可用余额222.000USDT</view>
					<u-form-item label="取款金额" :border-bottom="false">
						<u-input placeholder="请输入取款金额" :border="2">
							<view slot="right" class="right">
								<text style="margin-right: 10rpx;">JPY</text>
								<u-icon name="arrow-down" color="#FFF"></u-icon>
							</view>
						</u-input>
					</u-form-item>
					<u-form-item label="交易密码" :border-bottom="false">
						<u-input placeholder="请输入交易密码" :border="2"></u-input>
					</u-form-item>
				</u-form>
			</view>
			<btn class="btn" type="or">{{"确定"|lang}}</btn>
		</view>
	</view>
</template>

<script>
	import tabs from '@/components/tabs.vue'
	export default {
		data() {
			return {
				ac:0,
				list:[
					{name:"数字钱包"},
					{name:"法定货币"}
				]
			}
		},
		components:{tabs},
		methods: {
			changeIndex(index){
				this.ac=index
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
.right{
	color: #FFF;
	font-size: 32rpx;
}
</style>
