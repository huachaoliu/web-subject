/**
 * 来自***公司给的面试题
 */

/**
 * 题目说明: 根据函数说明, 实现以下函数
 * rs2Array (20分)
 * rs2MultiHash (20分)
 * 
 * 在浏览器中打开本页面, 应显示期望的结果.
 *
 * @fn rs2Array(rs)
 * 
 * @param rs对象，格式为 {h, d}, h/d分别是一个数组，表示一张表的表头字段与内容。
 * @return 一个数组，每一项为一个对象。
 * 
 * 示例：
 * 
 * 	var rs = {
 * 		h: ["id", "name"], 
 * 		d: [ [100, "Tom"], [101, "Jane"] ] 
 * 	};
 * 	var arr = rs2Array(rs); 
 * 
 * 	// 结果为
 * 	arr = [
 * 		{id: 100, name: "Tom"},
 * 		{id: 101, name: "Jane"} 
 * 	];
 * 
 */

function rs2Array(rs) {
	// 请在此实现函数：
	const arr = [];
	const { h, d } = rs;
	for (let i = 0; i < d.length; i++) {
		const obj = {};
		for (let j = 0; j < h.length; j++) {
			obj[h[j]] = d[i][j];
		}
		arr.push(obj);
	}
	return arr;
}


/**
* @fn rs2MultiHash(rs, key)
* 
* @param rs对象，格式为 {h, d}, h/d分别是一个数组，表示一张表的表头字段与内容。
* @return 一个对象，内容是键值对。
* 
* 示例：
* 
* 	var rs = {
* 		h: ["id", "name"], 
* 		d: [ [100, "Tom"], [101, "Jane"], [102, "Tom"] ] 
* 	};
* 	var hash = rs2MultiHash(rs, "name");  
* 
* 	// 结果为
* 	hash = {
* 		"Tom": [{id: 100, name: "Tom"}, {id: 102, name: "Tom"}],
* 		"Jane": [{id: 101, name: "Jane"}]
* 	};
* 
* 参数key为"name"，表示将rs对象中"name"字段作为键值，将名字相同的对象组织到同一个"name"字段对象的值数组中。
*/
function rs2MultiHash(rs, key) {
	// 请在此实现函数：
	const result = {};
	const result = {};
	const { h, d } = rs;
	const range = [];							
	for (let i = 0; i < d.length; i++) {
		const obj = {};
		for (let j = 0; j < d[i].length; j++) {
			obj[h[j]] = d[i][j];
		}
		range.push(obj);
	}
	const ret = {};
	for (let k = 0; k < range.length; k++) {
		if (ret[range[k][key]]) {
			ret[range[k][key]] += 1;
			const cache = result[range[k][key]];
			cache.push(range[k]);
			result[range[k][key]] = cache;
		} else {
			ret[range[k][key]] = 1;
			result[range[k][key]] = [range[k]];					
		}
	}
	return result;	
}

//////// 以下为测试程序，请勿修改或删除

var rs = {
	h: ["id", "name", "region"],
	d: [
		[100, "wang", "shanghai"],
		[101, "huang", "beijing"],
		[102, "zhang", "beijing"],
		[103, "li", "shanghai"],
	]
};

var ret;
ret = rs2Array(rs);
document.write("<pre>" + JSON.stringify(ret) + "</pre>");
/* 期望结果为:
[
	{id: 100, name: "wang", region: "shanghai"},
	{id: 101, name: "huang", region: "beijing"},
	{id: 102, name: "zhang", region: "beijing"},
	{id: 103, name: "li", region: "shanghai"}
]
*/

ret = rs2MultiHash(rs, "id");
document.write("<pre>" + JSON.stringify(ret) + "</pre>");
/* 期望结果为:
{
	100: [{id: 100, name: "wang", region: "shanghai"}],
	101: [{id: 101, name: "huang", region: "beijing"}],
	102: [{id: 102, name: "zhang", region: "beijing"}],
	103: [{id: 103, name: "li", region: "shanghai"}]
}
*/

ret = rs2MultiHash(rs, "region");
document.write("<pre>" + JSON.stringify(ret) + "</pre>");
/* 期望结果为:
{
	"shanghai": [
		{id: 100, name: "wang", region: "shanghai"},
		{id: 103, name: "li", region: "shanghai"}
	],
	"beijing": [
		{id: 101, name: "huang", region: "beijing"},
		{id: 102, name: "zhang", region: "beijing"}
	]
}
*/