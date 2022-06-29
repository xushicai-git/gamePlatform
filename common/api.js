export default {
	// 登录相关
	login:"index/login",//登录
	register:"index/register",//注册
	getUser:"account/getUserInfo",//获取当前用户登录信息
	index_logout:"index/logout",//退出登录
	index_sendPhoneCode:"index/sendPhoneCode",//发送手机验证码
	index_sendEmailCode:"index/sendEmailCode",//发送邮箱验证码
	index_captcha:"index/captcha",//图形验证码
	third_list:"third/list",//三方登陆渠道列表
	third_nonce:"third/nonce",//metamask获取加密随机串
	third_login:"third/login",//三方登陆
	third_getUrl:"third/getUrl",//三方登陆获取授权url
	
	
	// 质押相关
	pledge_getPledgeInfo:"pledge/getPledgeInfo",//质押弹框
	pledge_inPledge:"pledge/inPledge",//质押
	pledge_relievePledge:"pledge/relievePledge",//解除质押
	pledge_pledgeRecord:"pledge/pledgeRecord",//质押记录
	
	// 多语言
	lang_getLang:"lang/getLang",//多语言国家选择接口
	lang_getLangData:"lang/getLangData",//多语言翻译获取
	
	// 账户中心
	account_editEmail:"account/editEmail",//修改邮箱
	account_setEmail:"account/setEmail",//设置邮箱
	account_editDealPwd:"account/editDealPwd",//修改交易密码
	account_editPwd:"account/editPwd",//修改密码
	account_configStatus:"account/configStatus",//账户密码邮箱状态
	account_setDealPwd:"account/setDealPwd",//设置交易密码
	account_setNickName:"account/setNickName",//设置昵称
	account_modifyNickName:"account/modifyNickName",//修改昵称
	account_addBankInfo:"account/addBankInfo",//添加银行卡
	account_getBankInfos:"account/getBankInfos",//获取银行卡
	account_deleteBankInfo:"account/deleteBankInfo",//删除银行卡
	account_setNickName:"account/setNickName",//设置昵称
	account_editNickName:"account/editNickName",//修改昵称
	account_editAvatar:"account/editAvatar",//编辑头像
	index_getAvatars:"index/getAvatars",//获取可选头像列表
	account_getBalance:"account/getBalance",//获取钱包余额
	account_setCoin:"account/setCoin",//设置用户法币
	
	// 币种
	coin_chainList:"coin/chainList",//网络列表
	coin_bankList:"coin/bankList",//银行列表
	coin_list:"coin/list",//币种列表
	
	// 银行卡
	bank_deleteBankInfo:"bank/deleteBankInfo",
	bank_getBankInfos:"bank/getBankInfos",
	bank_addBankInfo:"bank/addBankInfo",
	
	// 数字钱包
	wallet_deleteWalletAddress:"wallet/deleteWalletAddress",
	wallet_getWalletAddress:"wallet/getWalletAddress",
	wallet_addWalletAddress:"wallet/addWalletAddress",
	
	// 上传
	common_upload:"common/upload",
	
	// 首页
	index_getBanner:"index/getBanner",//获取banner
	index_getHelp:"index/getHelp",//帮助内容获取
	index_getNotice:"index/getNotice",//获取首页公告
	index_disStatistics:"index/disStatistics",//近5日奖池发放统计
	index_pledgeStatistics:"index/pledgeStatistics",//质押总数据展示
	
	// 充值
	recharge_offline:"recharge/offline",//线下充值
	recharge_chainList:"recharge/chainList",//数字货币网络列表
	recharge_canalList:"recharge/canalList",//充值渠道列表
	recharge_canalConfig:"recharge/canalConfig",//充值渠道类型
	recharge_coinList:"recharge/coinList",//充值币种列表
}