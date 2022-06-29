<template>
	<view>
		<myHeader></myHeader>
		<view class="content">
			<view class="title-wapper" @click="toBack">
				<u-icon name="arrow-left" color="#FFF"></u-icon>
				<text style="margin-left: 20rpx;">{{"返回"|lang}}</text>
			</view>
			<view class="cart">
				<view class="cart-title">{{"修改用户名"|lang}}</view>
				<view class="form-wapper">
					<u-form labelPosition="top">
						<u-form-item label="新用户名" :borderBottom="false">
							<u-input @input="changeNickname" :value="userInfo.nickName" :border="2" placeholder="请输入新的用户名"></u-input>
						</u-form-item>
						<u-form-item label="更换头像" :borderBottom="false">
							<u-avatar :src="userInfo.avatar" size="106"></u-avatar>
						</u-form-item>
					</u-form>
				</view>
				<view class="avatar-wapper">
					<view class="avatar-box" v-for="item in avatarList">
						<u-avatar size="106" @click="setAvatar(item)" :src="item.image"></u-avatar>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import myHeader from '@/components/myHeader.vue'
	export default {
		data() {
			return {
				timeId:0,
				avatarList:[],
			}
		},
		components:{myHeader},
		onLoad() {
			this.getAvatarList()
		},
		computed:{
			...mapState(["userInfo"])
		},
		methods: {
			toBack(){
				uni.navigateBack()
			},
			changeNickname(e){
				clearTimeout(this.timeId)
				this.timeId = setTimeout(()=>{
					this.editNickname(e)
				},1000)
			},
			
			async editNickname(nickname){
				if(!nickname.trim()) return
				let url = this.userInfo.nickName?"account_editNickName":"account_setNickName"
				let res = await this.ajax({
					url,
					data:{nickName:nickname}
				})
				if(res.code==0){
					this.$store.commit("setUserInfo",{...this.userInfo,nickName:nickname})
				}
			},
			async setAvatar(item){
				let res = await this.ajax({
					url:"account_editAvatar",
					loading:true,
					data:{
						avatarId:item.id
					}
				})
				if(res.code==0){
					this.$store.commit("setUserInfo",{...this.userInfo,avatar:item.image})
				}
			},
			async getAvatarList(){
				let res = await this.ajax({
					url:"index_getAvatars"
				})
				if(res.code==0){
					this.avatarList = res.data
				}
			},
		}
	}
</script>

<style scoped>
.content{
	padding: 0 25rpx;
}
.cart-title{
	margin-bottom: 10rpx;
}
.title-wapper{
	font-size: 24rpx;
	padding: 30rpx 0 40rpx;
	display: inline-block;
}
.cart{
	background: #080231;
	border-radius: 17rpx;
	padding: 25rpx 0 63rpx;
	overflow: hidden;
}
.form-wapper{
	padding: 0 32rpx;
	border-bottom: 1px solid #E2E2E2;
}
/deep/.u-form-item--left__content__label{
	font-size: 24rpx;
}
.avatar-wapper{
	display: flex;
	flex-wrap: wrap;
	width: 750rpx;
}
.avatar-box{
	margin-right: 43rpx;
	margin-top: 42rpx;
}
</style>
