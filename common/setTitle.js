export default function(title){
	uni.setNavigationBarTitle({
		title:this.getLang(title)
	})
}