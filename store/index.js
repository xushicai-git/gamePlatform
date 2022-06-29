//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import ajax from '@/common/ajax.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		langData:{},
		langType:"",
		langList:[],
		userInfo:{}
	},
	mutations: {
		setLangType(state,type){
			uni.setStorageSync("lang_type",type)
			state.langType = type
		},
		setLangList(state,list){
			uni.setStorageSync("langList",list)
			state.langList = list
		},
		setLangData(state,data){
			state.langData = data
			uni.setStorageSync("lang_data",data)
		},
		setUserInfo(state,data){
			state.userInfo = data
		}
	},
	actions: {
		// 更新用户信息
		async setUserInfo({commit}){
			let res1 = await ajax({
				url:"account_getBalance"
			})
			
			let res = await ajax({
				url:"getUser"
			})
			if(res.code==0){
				commit("setUserInfo",res.data)
			}
		},
		
		
		// 多语言裂变
		async langList({commit}){
			let lang_type = uni.getStorageSync("lang_type")
			let res = await ajax({
				url:"lang_getLang"
			})
			if(res.code==0){
				if(lang_type){
					commit("setLangType",lang_type)
				}else{
					res.data.forEach(item=>{
						if(item.isDefaultLang==1){
							commit("setLangType",item.langFlag)
						}
					})
				}
				commit("setLangList",res.data)
			}
		},
		
		
		// 设置多语言
		async setLangData({commit},langFlag=""){
			let data = uni.getStorageSync("lang_data")
			if(data){
				commit("setLangData",data)
			}
			let res = await ajax({
				url:"lang_getLangData",
				data:{
					langFlag
				}
			})
			if(res.code==0){
				commit("setLangData",res.data)
			}
		}
	},
	getters:{
		
	}
})