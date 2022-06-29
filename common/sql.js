export default {
	//创建数据库或者有该数据库就打开
	openSqlite: function() {
		//创建数据库或者打开
		//这plus.sqlite只在手机上运行
		return new Promise((resolve, reject) => {
			plus.sqlite.openDatabase({
				name: "xj", //数据库名称
				path: "_doc/xj.db", //数据库地址，uniapp推荐以下划线为开头，这到底存在哪里去了，我也不清楚，哈哈
				success(e) {
					resolve("打开数据库"); //成功回调
				},
				fail(e) {
					reject(e); //失败回调
				},
			});
		});
	},



	//在该数据库里创建表格， 这一步也必须要！
	//下面注释里说的都是说sql:'create table if not exists....这里
	//userInfo是表格名，你也可以写其他的名，不能用数字作为表格名的开头！！！
	//括号里是表格的结构，列，这里我写了四列，list,id,gender,avatar这四列
	//list后面大写的英文是自动增加的意思，因为表格里的每一行必须有唯一标识
	//这sql语句会数据库的应该都看的懂，我是前端菜鸡，所以详细说明以便跟我一样不懂sql的前端看
	//"id" TEXT 意思是这一列放的值为字符串之类的，如果是想存数字之类的就改为INTEGER
	//数据库不能存对象，数组
	//创建 9、定位表（d_location）
	createTabel: function(tabelName,arrKey) {
		let keyStr ="";
		for (let key in arrKey) {
			keyStr += ` "${key}" ${arrKey[key]},\n`
		}
		let sql = `CREATE TABLE if not exists ${tabelName} (\n` +
					' "id" text NOT NULL,\n' +
					keyStr +
					' PRIMARY KEY ("id")\n' +
					");"
		return new Promise((resolve, reject) => {
			//创建表格在executeSql方法里写
			plus.sqlite.executeSql({
				name: "xj",
				//表格创建或者打开，后面为表格结构
				sql,
				success(e) {
					resolve("创建表");
				},
				fail(e) {
					reject(e);
				},
			});
		});
	},

	//向表格里添加数据
	//根据表格的列来添加信息
	//因为list列我设为自动增加，所以不用添加数据
	//values里是传过来要存的值，我这里是动态的，单引号加双引号拼接
	async addList(tabelName,dataList) {
		for (let key in dataList) {
			let res = await this.addItem(tabelName,dataList[key])
		}
	},

	async addItem(tabelName,data){
		let keyStr = "";
		let valueStr = "";
		for (let key in data) {
			if(keyStr){
				keyStr+= (","+key)
				valueStr+= `,"${data[key]}"`
			}else{
				keyStr+= key
				valueStr+= `"${data[key]}"`
			}
		}
		return await this.executeSql(`insert into ${tabelName}(${keyStr}) values(${valueStr})`)
	},
	
	// 获取数据
	async getData(tabelName,id){
		let sql = `select * from ${tabelName}`
		if(id){
			sql = `select * from ${tabelName} where id="${id}"`
		}
		console.log(sql)
		plus.sqlite.selectSql({
			name:"xj",
			sql,
			success(e) {
				console.log(e)
			},
			fail(e) {
				reslove(false)
			},
		});
	},
	
	
	// 执行sql语句
	executeSql(sql){
		return new Promise(reslove=>{
			plus.sqlite.executeSql({
				name:"xj",
				sql,
				success(e) {
					reslove(true)
				},
				fail(e) {
					reslove(false)
				},
			});
		});
	},
}
