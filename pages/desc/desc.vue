<template>
	<view>
		<myHeader></myHeader>
		<view class="content2">
			<view class="title js">{{"FoxG介绍"|lang}}</view>
			<view class="ts-item">FoxG 是 FoxGaming 平台在 BNB Chain 上推出的内部代币。FoxG 独特的挖矿解决⽅案，通过下注和质押机会成为FoxGaming项⽬的标志。</view>
			<view class="ts-item">⼀旦您在FoxGaming上获得并持有 FoxG 代币，您就可以从质押池中获得平台的部分利润。</view>
			<view class="ts-item">玩家将代币FoxG放⼊流动性池中——⽤于借出数字货币获取质押分红，赚取利息及⼿续费。</view>
			<view class="title bl-title">{{"产出比例规划"|lang}}</view>
			<qiun-data-charts 
				type="ring"
				:opts="opts"
				:chartData="chartData"
			/>
		</view>
		<view class="title zb-title content2">{{"关键指标"|lang}}</view>
		<view class="content cart">
			<view class="cart-item">
				<text>价格：</text>
				<text class="gr">0.016517  美元  贸易</text>
			</view>
			<view class="cart-item">
				<text>代码：</text>
				<text>FoxG</text>
			</view>
			<view class="cart-item">
				<text>姓名：</text>
				<text>FoxG代币</text>
			</view>
			<view class="cart-item">
				<text>价格：</text>
				<text>0.016517  美元  贸易</text>
			</view>
			<view class="cart-item">
				<text>合约地址：</text>
				<text class="gr">查看合同</text>
			</view>
			<view class="cart-item">
				<text>链：</text>
				<text>BNB 链 （BEP20）</text>
			</view>
			<view class="cart-item">
				<text>总排放量：</text>
				<text>5 000 000 000 BFG</text>
			</view>
			<view class="cart-item">
				<text>总发行量：</text>
				<text>2 759 950 128 BFG</text>
			</view>
			<view class="cart-item">
				<text>总质压：</text>
				<text>2 645 951 214 BFG</text>
			</view>
			<view class="cart-item">
				<text>未抵押总数：</text>
				<text>114 156 914 BFG</text>
			</view>
		</view>
		
		 <view class="content cart">
		 	<view class="cart-item">
		 		<text>总燃烧量：</text>
		 		<text>1 544 818 562</text>
		 	</view>
			<view class="cart-item">
				<text>从总供应量来看：</text>
				<text>35.89%</text>
			</view>
			<view class="cart-item">
				<text>燃烧合约</text>
				<text></text>
			</view>
		 </view>
		<view class="title zb-title content2">{{"FoxG的用途"|lang}}</view>
		<view class="content cart">
			<view class="fh-title">质押分红</view>
			<view class="fh-ts">玩家的FoxG可在网站参与质押，享受网站收益分红，每日零点自动发放，持有FoxG越多分红越多。</view>
			<view class="cart-btn">
				<text>{{"当前分红池"|lang}}</text>
				<text>$145,123.00</text>
			</view>
			<view class="cart-btn">
				<text>{{"昨日分红"|lang}}</text>
				<text>$145,123.00</text>
			</view>
			<btn type="or" style="margin-bottom: 20rpx;">{{"去质押"|lang}}</btn>
		</view>
		
		<view class="title zb-title content2">{{"如何获得FoxG"|lang}}</view>
		<view class="cart content2" style="margin-bottom: 35rpx;">
			<view class="sub-title">
				{{"游戏投注挖矿"|lang}}
			</view>
			<view class="fh-ts">
				玩家每笔游戏投注均有收益。盈利可获得对应奖金，且每笔游戏投注额产出5%的FoxG。
			</view>
			<view class="btn-wapper">
				<btn class="btn" type="or">{{"敬请期待"}}</btn>
			</view>
		</view>
		<view class="cart content2">
			<view class="sub-title">
				{{"邀请朋友"|lang}}
			</view>
			<view class="fh-ts">
				您邀请的每个朋友都会将他们投注的⼀定百分⽐作为您的佣⾦返还给您，并将直接记⼊您的余额。
			</view>
			<view class="btn-wapper">
				<btn class="btn" type="or">{{"去邀请"}}</btn>
			</view>
		</view>
	</view>
</template>

<script>
	import myHeader from '@/components/myHeader.vue'
	export default {
		data() {
		    return {
		      chartData: {},
		      //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
		      opts: {
				  fontColor:"#FFF",
		        rotate: false,
		        rotateLock: false,
		        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		        padding: [5,5,5,5],
		        dataLabel: true,
		        legend: {
		          show: true,
		          position: "bottom",
		          lineHeight: 25,
				  fontColor:"#FFF"
		        },
		        title: {
		          name: this.getLang("总产出"),
		          fontSize: 12,
		          color: "#FFF"
		        },
		        subtitle: {
		          name: "10B",
		          fontSize: 12,
		          color: "#FFF"
		        },
		        extra: {
		          ring: {
		            ringWidth: 40,
					centerColor:"#04001F",
		            activeOpacity: 0.5,
		            activeRadius: 10,
		            offsetAngle: 0,
		            labelWidth: 5,
		            border: false,
		            linearType: "custom"
		          }
		        }
		      }
		    };
		  },
		components:{myHeader},
		onReady() {
		    this.getServerData();
		  },
		methods: {
			 getServerData() {
			      //模拟从服务器获取数据时的延时
			      setTimeout(() => {
			        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			        let res = {
			            series: [
			              {
			                data: [{"name":"游戏挖矿","value":50},{"name":"合作伙伴持有并锁仓两年","value":30},{"name":"空投及社区奖励","value":20},{"name":"好友推荐奖励","value":18},{"name":"创始团年","value":8}]
			              }
			            ]
			          };
			        this.chartData = JSON.parse(JSON.stringify(res));
			      }, 500);
			    },
		}
	}
</script>

<style scoped>
.content{
	margin: 0 30rpx;
}
.content2{
	margin: 0 46rpx;
}
.title{
	font-size: 36rpx;
	font-family: PingFang SC;
	color: #FF5D23;
}
.js{
	margin: 20rpx 0;
}
.ts-item{
	font-size: 24rpx;
	color: #818181;
	line-height: 1.6em;
	margin-bottom: 30rpx;
}
.bl-title{
	margin-top: 64rpx;
	margin-bottom: 64rpx;
}
.cart{
	background: #190062;
	border-radius: 25rpx;
	padding: 14rpx 40rpx;
	margin-bottom: 45rpx;
}
.zb-title{
	margin-top: 80rpx;
	margin-bottom: 38rpx;
}
.cart-item{
	display: flex;
	font-size: 30rpx;
	padding: 20rpx 0;
}
.cart-item text{
	flex: 1;
}
.gr{
	color: #55D918;
}
.fh-title{
	color: #FF5D23;
	font-size: 24rpx;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
}
.fh-ts{
	color: #818181;
	font-size: 24rpx;
	line-height: 1.6em;
	margin-bottom: 40rpx;
}
.cart-btn{
	background: #320BA1;
	border-radius: 25rpx;
	margin-bottom: 41rpx;
	padding: 10rpx 21rpx;
	display: flex;
	flex-direction: column;
	line-height: 1.8em;
}
.cart-btn text:last-child{
	color: #FF5D23;
	font-size: 36rpx;
}
.sub-title{
	color: #FF5D23;
	padding: 20rpx 0;
}
.btn-wapper{
	display: flex;
	justify-content: flex-end;
	margin-bottom: 30rpx;
}
.btn{
	min-width: 275rpx;
	margin: 0;
}
</style>
