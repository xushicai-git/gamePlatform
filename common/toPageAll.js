export default function(url){
	if(url.includes("http")){
		// #ifdef APP-PLUS
		plus.runtime.openURL(url)
		// #endif
		// #ifdef H5
		window.open(url)
		// #endif
	}else{
		uni.navigateTo({url})
	}
}