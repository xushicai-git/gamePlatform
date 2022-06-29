export default function(url,data,repeat,keyName="navigateTo"){
	if(repeat){
		var pages = getCurrentPages() // 获取栈实例
		let currentRoute  = pages[pages.length-1].route; // 获取当前页⾯路由
		let currentPage = pages[pages.length-1]['$page']['fullPath'] //当前页⾯路径(带参数
		if(url.includes(currentPage)){
			return
		}
	}
	if(data){
		url+="?"
		for (let key in data) {
			if(url.includes("?")){
				url += `&${key}=${data[key]}`
			}else{
				url += `?${key}=${data[key]}`
			}
		}
	}
	uni[keyName]({url})
}