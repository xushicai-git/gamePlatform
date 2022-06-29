import config from "@/common/config.js";
import api from '@/common/api.js'
import getLang from './lang.js'
function testData(res,method,showTost) {
	if(res.statusCode==500){
		uni.showToast({
			icon:"none",
			title:getLang("服务器繁忙")
		})
		return
	}
	if(res.data.code==500){
		uni.showToast({
			icon:"none",
			title:res.data.msg
		})
	}
	if(res.data.code==1000){
		uni.setStorageSync("token","")
	}
}


// 请求
function ajax({
	url,
	data = {},
	method = "POST",
	filePath,
	type="",
	loading = false,
	showTost = true
}) {
	let _this = this;
	method = method.toUpperCase();
	const token = uni.getStorageSync("token")
	const langType = uni.getStorageSync("lang_type")
	return new Promise((reslove, resject) => {
		if(loading) uni.showLoading({mask:true})
		// 上传文件
		if(type=="upload"){
			uni.uploadFile({
				url:config.rootUrl + api[url],
				name: 'file',
				filePath,
				header: {
					"Authorization": token,
					"lang":langType
				},
				success(data){
					data.data = JSON.parse(data.data)
					testData(data,method,showTost)
					reslove(data.data)
				},
				complete() {
					if(loading) uni.hideLoading()
				}
				
			})
			return
		}
		
		
		uni.request({
			dataType: "json",
			url: config.rootUrl + api[url],
			method,
			data,
			header: {
				"Authorization": token,
				"lang":langType
			},
			success(data) {
				testData(data,method,showTost)
				reslove(data.data)
			},
			fail(err) {
				uni.showToast({
					icon:"none",
					title:getLang("加载失败")
				})
				reslove({})
			},
			complete() {
				if(loading) uni.hideLoading()
			}
		})
	});
}
export default ajax;
