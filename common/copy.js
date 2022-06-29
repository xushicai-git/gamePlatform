export default function(txt) {
	txt += "";
	// #ifdef APP-PLUS
	uni.setClipboardData({
		data: txt,
	});
	uni.showToast({
		icon:"none",
		title: this.getLang("复制成功")
	})
	// #endif

	// #ifdef H5
	if (document.queryCommandSupported('copy')) {
		let textarea = document.createElement("textarea")
		textarea.value = txt
		textarea.readOnly = "readOnly"
		document.body.appendChild(textarea)
		textarea.select() // 选中文本内容
		textarea.setSelectionRange(0, txt.length)
		let result = document.execCommand("copy")
		textarea.remove()
		uni.showToast({
			icon:"none",
			title: this.getLang("复制成功")
		})
	}
	// #endif
}
