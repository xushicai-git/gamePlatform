<template>
	<view>
		<statusBar></statusBar>
		<view class="__header">
			<view class="menu-wapper" @click="isMenu = !isMenu">
				<image class="menu" src="../static/img/menu.png" mode="aspectFit"></image>
			</view>
			<view class="header-btn-wapper">
				<dropdown class="dropdown">
					<image slot="left" class="bnt-item-icon" src="@/static/img/bi1.png"></image>
					<text style="font-size: 28rpx;">11.0123412</text>
				</dropdown>
				<dropdown class="dropdown" @tab="showLang" v-if="acLang">
					<image slot="left" class="bnt-item-icon2" :src="acLang.icon"></image>
					<text class="bnt-item-txt">{{acLang.langFlag}}</text>
				</dropdown>
			</view>
		</view>
		<u-popup v-model="isLang" mode="center" border-radius="30" :closeable="true" close-icon-color="#FFF">
			<view class="lang-wapper">
				<view class="lang-title">
					{{"国家选择"|lang}}
				</view>
				<view class="lang-item-wapper">
					<view class="lang-item" v-for="item in newLangList" :key="item.id" @click="changeLang(item)">
						<image class="lang-item-icon" :src="item.logo"></image>
						<text class="lang-item-name">{{item.langFlag}}</text>
						<image v-if="item.isDefaultLang==1" src="../static/icon/duihao.png" class="duihao-icon"></image>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="isMenu">
			<view class="pop-content">
				<view class="logo-wapper" @click="toNavPagr('/pages/my/my','redirectTo')">
					<image class="logo" src="../static/img/logo.png"></image>
					<!-- <u-avatar></u-avatar> -->
					<view class="logo-txt">{{!login?"立即登录":'YIOPP' | lang}}</view>
				</view>
				<view class="nav-wapper">
					<view class="nav-item" v-for="(item,index) in navList" :key="index" @click="toNavPagr(item.url,item.type)">
						<image class="nav-item-icon" :src="item.icon" mode="aspectFit"></image>
						<text class="nav-txt">{{item.name|lang}}</text>
						<u-icon name="arrow-right" size="26"></u-icon>
					</view>
				</view>
				<view class="ext" v-if="login" @click="ext">
					<image class="ext-icon" src="../static/icon/dengchu.png"></image>
					<text>{{"登出"|lang}}</text>
				</view>
			</view>
		</u-popup>
		<model ref="model"></model>
	</view>
</template>

<script>
	import dropdown from "./dropdown.vue"
	import {mapState} from 'vuex'
	export default {
		name:"myHeader",
		data() {
			return {
				isLang:false,
				isMenu:false,
				login:true,
				navList:[
					{name:"FoxG质押",url:"",icon: require("../static/icon/zhiya.png"),url:"/pages/index/index",type:"redirectTo"},
					{name:"FoxG交易",url:"",icon:require("../static/icon/jiaoyi.png"),type:"navigateTo",url:"/pages/transaction/transaction"},
					{name:"FoxG介绍",url:"",icon:require("../static/icon/jieshao.png"),type:"redirectTo",url:"/pages/desc/desc"},
					{name:"消息",url:"",icon:require("../static/icon/xiaoxi.png"),url:'/pages/msgList/msgList',type:"redirectTo"},
					{name:"游戏大厅",url:"",icon:require("../static/img/bi1.png"),type:"redirectTo"},
					{name:"货币单位",url:"",icon:require("../static/icon/danwei.png"),url:'/pages/company/company',type:"navigateTo"}
				]
			};
		},
		watch:{
			isMenu(){
				this.login = this.isLogin()
			}
		},
		computed :{
			...mapState(["userInfo","langList","langType"]),
			acLang(){
				return this.newLangList.find(item=>item.isDefaultLang==1)
			},
			newLangList(){
				if(this.langType){
					return this.langList.map(item=>{
						if(item.langFlag==this.langType){
							item.isDefaultLang = 1
						}else{
							item.isDefaultLang = 2
						}
						return item
					})
				}else{
					return this.langList
				}
			},
		},
		components:{dropdown},
		methods:{
			toNavPagr(url,type){
				this.toPage(url,false,true,type)
				this.isMenu = false
			},
			showLang(){
				this.isLang = true
			},
			changeLang(item){
				this.$store.commit("setLangType",item.langFlag)
				this.isLang = false
				// #ifdef H5
				history.go(0)
				// #endif
			},
			// 退出登录
			async ext(){
				let confirm = await this.$refs.model.show({content:"确认登出当前账号?"})
				if(!confirm) return
				let res = await this.ajax({
					url:"index_logout",
					loading:true
				})
				if(res.code==0){
					uni.removeStorageSync("token")
					this.login = false
					this.$store.commit("setUserInfo",{})
					this.tost("已登出当前账号")
				}
			}
		}
	}
</script>

<style scoped>
.__header{
	background-color: #190062;
	padding: 61rpx 24rpx 37rpx;
	border-bottom-left-radius: 31rpx;
	border-bottom-right-radius: 31rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 999;
}
.header-btn-wapper{
	display: flex;
}
.menu{
	height: 70rpx;
	width: 108rpx;
}
.bnt-item-icon{
	width: 56rpx;
	height: 56rpx;
	border-radius: 50%;
}
.logo-txt{
	margin-top: 20rpx;
}
.bnt-item-icon2{
	width: 51rpx;
	height: 34rpx;
}

/deep/.u-drawer-left{
	background-color: #06002D;
}
.dropdown{
	margin-left: 26rpx;
}
.pop-content{
	width: 450rpx;
	height: 100%;
	overflow: hidden;
}
.logo{
	width: 87rpx;
	height: 80rpx;
}
.logo-wapper{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 200rpx;
}
.nav-item-icon{
	width: 35rpx;
	height: 35rpx;
	flex-shrink: 0;
}
.nav-item{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25rpx 50rpx;
}
.nav-txt{
	flex: 1;
	margin: 0 20rpx;
}
.nav-wapper{
	margin-top: 80rpx;
}
.ext-icon{
	width: 30rpx;
	height: 34rpx;
	margin-right: 25rpx;
}
.ext{
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 81rpx;
	left: 44rpx;
}
.lang-item-icon{
	width: 50rpx;
	height: 50rpx;
}
.lang-wapper{
	width: 700rpx;
	padding: 30rpx;
}
.lang-title{
	margin-bottom: 30rpx;
}
.lang-item-wapper{
	display: flex;
	flex-wrap: wrap;
}
.lang-item{
	width: 150rpx;
	height: 150rpx;
	background-color: rgba(255,255,255,.1);
	border: 1px solid rgba(255,255,255,.4);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-right: 94rpx;
	margin-bottom: 30rpx;
	position: relative;
}
.lang-item:nth-child(3n){
	margin-right: 0;
}
.duihao-icon{
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #fff;
	border-radius: 50%;
}
</style>