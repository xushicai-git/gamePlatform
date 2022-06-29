<template>
	<u-popup v-model="isShow" mode="center" border-radius="39" :closeable="true" close-icon-color="#FFF">
		<view class="pop-content">
			<view class="pop-title">
				{{"解除质押"|lang}}
			</view>
			<u-form labelPosition="top">
				<u-form-item :border-bottom="false" label="可解除质押">
					<u-input value="1000" border="2">
						<image slot="left" class="left-icon" src="../static/img/usdt.png"></image>
					</u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<u-input value="1000" border="2">
						<image slot="left" class="left-icon" src="../static/img/bi1.png"></image>
					</u-input>
				</u-form-item>
			</u-form>
			<btn type="or" class="jc-btn">{{"解除质押"|lang}}</btn>
		</view>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false
			};
		},
		methods:{
			show(){
				this.isShow=true
			}
		}
	}
</script>

<style scoped>
.pop-content{
	height: 100%;
	width: 701rpx;
	padding: 46rpx 25rpx 36rpx;
}
.pop-title{
	text-align: center;
}
.left-icon{
	width: 48rpx;
	height: 48rpx;
	margin-right: 45rpx;
}
.jc-btn{
	margin-top: 200rpx;
	margin-bottom: 50rpx;
}
</style>