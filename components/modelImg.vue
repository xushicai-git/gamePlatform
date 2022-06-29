<template>
	<u-popup v-model="isShow" :mask-close-able="false" mode="center" border-radius="39" :closeable="true" close-icon-color="#FFF">
		<view class="">
			<view class="top-img-wapper">
				<image src="../static/img/pop-img.png" class="top-img" mode="aspectFit"></image>
			</view>
			<view class="pop-content">
				<view class="pop-title">
					{{title|lang}}
				</view>
				<view class="pop-content-txt">
					{{content}}
				</view>
				<view class="btn-wapper">
					<btn type="or" v-if="iscancel" @tab="cancel" class="jc-btn jc-btn1">{{"取消"|lang}}</btn>
					<btn type="or" v-if="isconfirm" @tab="confirm" class="jc-btn">{{confirmText|lang}}</btn>
				</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
	export default {
		name:"model",
		data() {
			return {
				isShow:false,
				content:"",
				title:"",
				isTitle:true,
				iscancel:false,
				isconfirm:true,
				res:null,
				confirmText:"确认"
			};
		},
		methods:{
			show({content,title,isconfirm,iscancel=true,confirmText="确认"}){
				this.content = content || ""
				this.title = title || "温馨提示"
				this.confirmText = confirmText
				this.isconfirm = isconfirm || true
				this.iscancel = iscancel
				this.isShow = true
				return new Promise((res)=>{
					this.res = res
				})
			},
			hide(){
				this.isShow = false
			},
			cancel(res){
				this.res(false)
				this.hide()
			},
			confirm(){
				this.res(true)
				this.hide()
			}
		}
	}
</script>

<style scoped>
.pop-content{
	height: 100%;
	width: 701rpx;
	padding: 46rpx 25rpx 72rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #04001F;
	border-radius: 39rpx;
}
.pop-title{
	text-align: center;
	margin-bottom: 40rpx;
}
.pop-content-txt{
	margin-bottom: 56rpx;
	font-size: 24rpx;
	line-height: 1.8em;
}
.btn-wapper{
	display: flex;
	width: 100%;
}
.jc-btn{
	flex: 1;
}
.jc-btn1{
	background: #7D7D7D;
}
.jc-btn:nth-child(2){
	margin-left: 80rpx;
}
.top-img{
	width: 400rpx;
	height: 400rpx;
	flex-shrink: 0;
	margin-bottom: -170rpx;
	margin-top: -30rpx;
}
.top-img-wapper{
	display: flex;
	justify-content: center;
}
/deep/.u-mode-center-box{
	background: transparent !important;
	overflow: auto !important;
	margin-bottom: 250rpx !important;
}
/deep/.u-close{
	top: 230rpx;
}
</style>
