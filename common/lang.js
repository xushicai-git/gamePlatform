import store from '@/store/index.js'

function getLang(lang_key) {
	var langData = store.state.langData;
	if(!langData.data) return ""
	let obj = langData.data.find(item=>item.langKey==lang_key)
	if(obj) return langValue
	return lang_key
}
export default getLang;
