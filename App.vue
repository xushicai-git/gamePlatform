<script>
	export default {
		onLaunch: async function() {
			await this.$store.dispatch("langList")
			await this.$store.dispatch("setLangData")
			await this.$store.dispatch("setUserInfo")
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uview-ui/index.scss";
	// 初始化ui
	.u-checkbox__icon-wrap--square{
		background-color: #FFF;
	}
	.u-form-item--left__content__label{
		padding: 0 !important;
		line-height: 1em;
		margin-bottom: 16rpx;
	}
	.u-mode-center-box{
		// background: #04001F !important;
		background: #04001F !important;
	}
	.u-mask{
		background: rgba(255, 255, 255, 0.1) !important;
	}
	.u-drawer-bottom{
		background-color: #190062 !important;
	}
	.u-action-sheet-item:after{
		border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
	}
	.u-gab{
		background-color: rgba(255, 255, 255, 0.1) !important;
		height: 1rpx !important;
	}
	.u-actionsheet-cancel{
		color: #FFF !important;
	}
	.ac-def{
		transition: all .5s;
		transform: rotate(0deg);
	}
	.ac-ac{
		transition: all .5s;
		transform: rotate(180deg);
	}
	
	/*每个页面公共css */
	page {
		background: #04001F;
		color: #FFF;
		font-size: 30rpx;
		padding: 1rpx 0;
	}
</style>
