<template>
	<view class="statusBar-wapper">
		<view class="statusBar" :style="{background}"></view>
	</view>
</template>

<script>
	export default {
		name:"statusBar",
		props:["background"],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.statusBar-wapper{
	height: var(--status-bar-height);
	width: 100%;
}
.statusBar{
	height: var(--status-bar-height);
	width: 100%;
	background-color:rgba(0,0,0,0);
	position: fixed;
	top: 0;
	z-index: 99;
	left: 0;
}
</style>
