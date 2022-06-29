<template>
	<view class="page">
		
		<myHeader></myHeader>
		<view class="content">
			<view class="swiper-wapper">
				<u-swiper @click="tabSwiper" height="263" bg-color="#04001F" :list="bannerList"></u-swiper>
				<u-notice-bar @click="noticeClick" mode="vertical" color="#FFF" bg-color="linear-gradient(to right, transparent, #190062 5%,#190062 95%,transparent)" padding="8rpx 0rpx" font-size="24" :volume-icon="true"  :list="noticeList"></u-notice-bar>
			</view>
			<view class="sun-title">{{"质押"|lang}}</view>
			<view class="cart zy-wapper">
				<view class="zy-top">
					<view class="zy-t-l">
						<text>{{"工资"|lang}}</text>
						<text class="zy-t-r-num">${{statisticsData.totalSalary}}</text>
					</view>
				</view>
				<view class="zy-top">
					<view class="zy-t-l">
						<text>{{"平台总收益"|lang}}</text>
						<text class="zy-t-r-num">${{statisticsData.totalProfit}}</text>
					</view>
					<view class="zy-t-r">
						<text>{{"总质押金额"|lang}}</text>
						<text class="zy-t-r-num">${{statisticsData.totalPledge}}</text>
					</view>
				</view>
				<view class="zy-top zy-zhy">
					<view>{{"总质押数量"|lang}}</view>
					<view class="zy-zhy-content">
						<text class="zy-t-r-num" v-for="item in statisticsData.pledgeList">{{item.coinName}}:{{item.totalAmount}}</text>
					</view>
				</view>
				<view class="zy-bottom">
					<view class="zy-b-l">
						<text>{{"总计已派发"|lang}}</text>
						<text class="zy-b-l-num">${{statisticsData.totalDistribution}}</text>
					</view>
					<view class="zy-b-r">
						<text>{{"下个分红倒计时"|lang}}：</text>
						<view class="count-down">
							<u-count-down font-size="30" color="#FFF" bg-color="#CD631B" separator-color="#FFF" :timestamp="statisticsData.nextBonusTime|timeInit"></u-count-down>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cart cart2">
				<view class="cart gz-item">
					<text>{{"FoxG余额"|lang}}：88.00</text>
					<text>{{"USDT余额"|lang}}：88.00</text>
					<btn class="gz-btn" @tab="zy" :login="true">{{"质押"|lang}}</btn>
				</view>
				<view class="cart gz-item">
					<view class="gz-item-l">
						<view class="edit-wapper">
							{{"个人质押"|lang}}({{"占比"|lang}}0%)
							<image src="../../static/icon/bijiben.png" class="edit-icon"></image>
						</view>
						<view class="">FoxG:  100 ≈ 1$</view>
						<view class="">USDT:  100 ≈ 100$</view>
					</view>
					<view class="gz-item-btn-wapper">
						<btn class="gz-btn">{{"解除质押"|lang}}</btn>
					</view>
				</view>
				<view class="cart gz-item">
					<view class="gz-item-l">
						<view>{{"可领取原力分红"|lang}}({{"比例"|lang}}0%)</view>
						<view style="margin-bottom: 20rpx;">USDT:  1 ≈ 1$</view>
						<view>{{"可领取原力分红"|lang}}({{"比例"|lang}}0%)</view>
						<view>FoxG:  100 ≈ 1$</view>
					</view>
					<view class="gz-item-btn-wapper gz-item-btn-wapper2">
						<btn class="gz-btn">{{"领取原力分红"|lang}}</btn>
						<btn class="gz-btn">{{"领取助力分红"|lang}}</btn>
					</view>
				</view>
				<view class="cart gz-item">
					<view class="gz-item-l">
						<view class="edit-wapper">
							{{"个人累计分红"|lang}}
						</view>
						<view class="">FoxG:  30 ≈ 1$</view>
						<view class="">USDT:  30 ≈ 1$</view>
					</view>
					<view class="gz-item-btn-wapper">
						<btn class="gz-btn">{{"查看记录"|lang}}</btn>
					</view>
				</view>
				
				<view class="gz-title">
					{{"规则说明"|lang}}
				</view>
				<view class="gz-txt">
					<view class="gz-txt-item">
						1.押押周期以周为单位，每周一凌晨01:00:00(时区)统一解 除押。
					</view>
					<view class="gz-txt-item">
						2.质押金额限制为100最小，低于该不可质押。
					</view>
					<view class="gz-txt-item">
						3.分红金额为每日奖池的5%，按照个人押质数和最高分红金额 ，  估计总红金额由原力值和预测值决定。
					</view>
					<view class="gz-txt-item">
						4.每日分红时间为00:15:00（时区）。
					</view>
				</view>
			</view>
		</view>

		<view class="fhdata content2">
			<image src="@/static/img/fhdata-bg.png" class="fhdata-bg"></image>
			<view class="fhdata-title">
				{{'分红数据'|lang}}
			</view>
			<view class="fhdata-ts">
				{{"近五日奖池发放"|lang}}<br>
				{{"随着平台成长,股东质押的FPG会日渐增长"|lang}}
			</view>
			<view class="charts-wapper">
				<qiun-data-charts type="column" :chartData="chartData"/>
			</view>
		</view>
		
		<!-- 分红排行 -->
		<view class="content cart fhph-cart">
			<view class="fhph-title">
				{{"分红排行榜"|lang}}
			</view>
			<view class="fhph-tabel-wapper">
				<view>{{"排行"|lang}}</view>
				<view>{{"用户名"|lang}}</view>
				<view>{{"质押数量"|lang}}</view>
				<view>{{"获得分红"|lang}}</view>
			</view>
			<view class="fhph-tabel" v-for="(item,index) in 5">
				<view>
					<image v-if="index==0" class="fhph-tabel-icon" src="@/static/icon/ph1.png"></image>
					<image v-if="index==1" class="fhph-tabel-icon" src="@/static/icon/ph2.png"></image>
					<image v-if="index==2" class="fhph-tabel-icon" src="@/static/icon/ph3.png"></image>
					<text v-if="index>2">{{index}}</text>
				</view>
				<view>影虎a</view>
				<view class="zysl-wapper">
					<view class="zysl-item">
						<image class="zysl-icon" src="@/static/img/usdt.png"></image>
						<text>2000</text>
					</view>
					<view class="zysl-item">
						<image class="zysl-icon" src="@/static/img/bi1.png"></image>
						<text>2000</text>
					</view>
				</view>
				<view>$200.00</view>
			</view>
		</view>
		
		<!-- 记录 -->
		<view class="content tabs">
			<view class="tabs-item tabs-item-ac">
				{{"全站记录"|lang}}
			</view>
			<view class="tabs-item">
				{{"个人记录"|lang}}
			</view>
		</view>
		<!-- 分红排行 -->
		<view class="content cart fhph-cart">
			<view class="fhph-tabel-wapper jl-tabel-wapper">
				<view class="c1">{{"日期"|lang}}</view>
				<view>{{"质押数量"|lang}}</view>
				<view>{{"总计已派发"|lang}}</view>
			</view>
			<view class="fhph-tabel jl-tabel" v-for="(item,index) in 5">
				<view class="c1">06/15</view>
				<view class="zysl-wapper">
					<view class="zysl-item">
						<image class="zysl-icon" src="@/static/img/usdt.png"></image>
						<text>2000</text>
					</view>
					<view class="zysl-item">
						<image class="zysl-icon" src="@/static/img/bi1.png"></image>
						<text>2000</text>
					</view>
				</view>
				<view>$200.00</view>
			</view>
		</view>
		
		<view class="content">
			<view class="sun-title sun-title2">{{"常见问题解答"|lang}}</view>
			<view class="wt-item cart" v-for="item in helpList" :key="item.id">
				<view class="wt-title" @click="tabHelpItem(item)">
					<text>{{item.title}}</text>
					<u-icon :class="item.ac?'ac-ac':'ac-def'" color="#FFF" size="26" name="arrow-down"></u-icon>
				</view>
				<view class="wt-txt" v-if="item.ac" v-html="item.answer"></view>
			</view>
		</view>
		
		<!-- 质押弹窗 -->
		<pledgePop ref="pledgePop"></pledgePop>
		<closePledgePop></closePledgePop>
		<modelImg ref="modelImg"></modelImg>
	</view>
</template>

<script>
	import myHeader from '@/components/myHeader.vue'
	import pledgePop from '@/components/pledgePop.vue'
	import closePledgePop from '@/components/closePledgePop.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				bannerList: [],
				noticeList: [],
				noticeListContent:[],
				helpList:[],
				statisticsData:{pledgeList:[]},
				chartData: {},
			}
		},
		onLoad() {
			this.getBannerList()
			this.getNotice()
			this.getHelpList()
			this.pledgeStatistics()
			this.disStatistics()
		},
		onReady() {
			// this.$refs.modelImg.show({
			// 	title:"质押",
			// 	content:"恭喜您已质押成功100FoxG，每日分红会在00:15:00发放，别忘了来领取哦。"
			// })
		},
		filters:{
			timeInit(time){
				return (time - new Date().getTime())/1000
			}
		},
		computed:{
			...mapState(['langType']),
		},
		components:{myHeader,pledgePop,closePledgePop},
		methods: {
			
			// 近5日奖池发放统计
			async disStatistics(){
				let res = await this.ajax({
					url:"index_disStatistics"
				})
				if(res.code==0){
					console.log(res.data,"123456")
					this.chartData = {
						categories: res.data.map(item=>item.date.slice(5)).reverse(),
						series: [
						  {
						    name: this.getLang("数据"),
						    data: res.data.map(item=>item.amount).reverse()
						  }
						]
					}
				}
			},
			
			// 质押总数据
			async pledgeStatistics(){
				let res = await this.ajax({
					url:"index_pledgeStatistics"
				})
				if(res.code==0){
					this.statisticsData = res.data
				}
			},
			
			tabHelpItem(data){
				data.ac = !data.ac
				if(data.ac){
					this.helpList.forEach(item=>{
						if(item.id!=data.id){
							item.ac = false
						}
					})
				}
				this.$forceUpdate()
			},
			async getHelpList(){
				let res = await this.ajax({
					url:"index_getHelp"
				})
				if(res.code==0){
					this.helpList = res.data
				}
			},
			async getNotice(){
				let res = await this.ajax({
					url:"index_getNotice"
				})
				if(res.code==0){
					this.noticeList = res.data.map(item=>{
						return item.title
					})
					this.noticeListContent = res.data
				}
			},
			noticeClick(i){
				this.toPage("/pages/noticeInfo/noticeInfo",{data:this.urlStr(this.noticeListContent[i])})
			},
			async getBannerList(){
				let res = await this.ajax({
					url:"index_getBanner"
				})
				if(res.code==0){
					this.bannerList = res.data.map(item=>{
						item.image = item.address
						return item
					})
				}
			},
			tabSwiper(i){
				this.toPageAll(this.bannerList[i].urlLink)
			},
			// 质押
			zy(){
				this.$refs.pledgePop.show()
			}
		}
	}
</script>

<style scoped>
	@import url(./index.css);
</style>
