<template>
	<view>
		<myHeader></myHeader>
		<view class="content">
			<view class="dropdown-wapper">
				<dropdown>已读</dropdown>
			</view>
			<view class="tabs-wapper">
				<view @click="ac=0" :class="['tabs-item',ac==0?'tabs-item-ac':'']">{{"系统消息"|lang}}</view>
				<view @click="ac=1" :class="['tabs-item',ac==1?'tabs-item-ac2':'']">{{"个人消息"|lang}}</view>
			</view>
			<msgItem @tabItem="toPage('/pages/msgInfo/msgInfo')" v-for="item in 8"></msgItem>
		</view>
	</view>
</template>

<script>
	import dropdown from "@/components//dropdown.vue"
	import myHeader from '@/components/myHeader.vue'
	import msgItem from '@/components/msgItem.vue'
	export default {
		data() {
			return {
				ac:0
			}
		},
		components:{myHeader,dropdown,msgItem},
		methods: {
			
		}
	}
</script>

<style scoped>
.content{
	padding:0 24rpx;
}
.dropdown-wapper{
	display: flex;
	justify-content: flex-end;
	margin-top: 13rpx;
}
.tabs-wapper{
	display: flex;
	align-items: center;
	width: 473rpx;
	margin: 17rpx auto 24rpx;
	background-color: #2F2E52;
	border-radius: 25rpx;
	overflow: hidden;
}
.tabs-item{
	flex: 1;
	padding: ;
	height: 74rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.tabs-item-ac{
	background: #1D0B99;
	box-shadow: -3rpx -29rpx 6rpx 3rpx rgba(0, 0, 0, 0.35);
	border-bottom-right-radius: 90rpx;
}
.tabs-item-ac2{
	background: #1D0B99;
	box-shadow: -3rpx -29rpx 6rpx 3rpx rgba(0, 0, 0, 0.35);
	border-bottom-left-radius: 90rpx;
}
/deep/.msg-content{
	display: -webkit-box;    /*弹性伸缩盒子*/
	-webkit-box-orient: vertical; /*子元素垂直排列*/
	-webkit-line-clamp: 4;   /*可以显示的行数，超出部分用...表示*/
	text-overflow: ellipsis; 
	overflow: hidden;
}
</style>
