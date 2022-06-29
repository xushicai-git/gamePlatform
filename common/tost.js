export default function(title,cb,duration=1500){
	uni.showToast({
		icon:"none",
		title:this.getLang(title),
		duration:duration
	})
	if(cb){
		setTimeout(()=>{
			cb()
		},duration)
	}
}