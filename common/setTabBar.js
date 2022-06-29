export default function(){
	let arr = ["首页","活动","社区","我的"]
	arr.forEach((item,index)=>{
		uni.setTabBarItem({
			text:this.getLang(item),
			index
		})
	})
}