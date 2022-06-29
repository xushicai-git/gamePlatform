import App from './App'
import Vue from 'vue'
import store from './store/index.js'
import setTitle from './common/setTitle.js'
import setTabBar from './common/setTabBar.js'
import getLang from './common/lang.js'
import tost from './common/tost.js'
import uView from '@/uview-ui'
import {timeInit} from './common/filters.js'
import ajax from './common/ajax.js'
import api from './common/api.js'
import copy from './common/copy.js'
import toPageAll from './common/toPageAll.js'
import toPage from './common/toPage.js'
import isLogin from './common/isLogin.js'
import 'common/initRouter.js'
import statusBar from '@/components/statusBar.vue'
import btn from '@/components/btn.vue'
import model from '@/components/model.vue'
import modelImg from '@/components/modelImg.vue'
import none from '@/components/none.vue'


Vue.component("statusBar",statusBar)
Vue.component("btn",btn)
Vue.component("model",model)
Vue.component("modelImg",modelImg)
Vue.component("none",none)

// 注册全局方法
Vue.prototype.setTitle = setTitle
Vue.prototype.toPageAll = toPageAll
Vue.prototype.toPage = toPage
Vue.prototype.setTabBar = setTabBar
Vue.prototype.getLang = getLang
Vue.prototype.ajax = ajax
Vue.prototype.isLogin = isLogin
Vue.prototype.api = api
Vue.prototype.copy = copy
Vue.prototype.tost = tost
Vue.prototype.isLogin = ()=>{
	return uni.getStorageSync("token")?true:false
}
Vue.prototype.urlStr = (json)=>{
	return encodeURIComponent(JSON.stringify(json));
};
Vue.prototype.urlParse = (str)=>{
	return JSON.parse(decodeURIComponent(str));
};

Vue.filter("lang",getLang)


Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
