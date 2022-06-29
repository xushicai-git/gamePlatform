export default function(){
	let login = uni.getStorageSync("login")
	if(login){
		return true
	}else{
		uni.navigateTo({
			url:"/pages/login/login"
		})
	}
}