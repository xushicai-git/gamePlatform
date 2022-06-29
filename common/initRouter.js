
const {navigateTo,switchTab,redirectTo} = uni
const noLogin = ["index/index","login/login","retrievePassword/retrievePassword"]

uni.navigateTo({url:"/pages/index/index"})

uni.navigateTo = (opt)=>{
	befor(opt,()=>{
		navigateTo(opt)
	});
}

uni.redirectTo = (opt)=>{
	befor(opt,()=>{
		redirectTo(opt)
	});
}

function befor(opt,next){
	let flag = true
	noLogin.forEach(item=>{
		if(opt.url.includes(item)){
			flag = false
		}
	})
	if(flag){
		const login = uni.getStorageSync("token")
		if(login){
			next()
		}else{
			navigateTo({
				url:"/pages/login/login",
			})	
		}
	}else{
		next()
	}
}