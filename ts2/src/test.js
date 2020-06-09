// 这是node中向外暴露成员的形式
// module.exports = {}
// var 名称 = require('模块标识符')

// 在es6中，也通过规范的方式，规定了es6中如何到如何导出模块
// es6中导入模块，使用import 模块名称 from '模块标识符'    import '路径'

// 在es6中，使用export default 和 export 向外暴露成员

// export default {
// 	name: 'ww',
// 	age: 21
// }

var info = {
	name: 'ww',
	age: 21
}
export default info


export var title = 'ahahahahahaha'
export var title1 = 'ahahaha11111'
export var title2 = 'ahahaha22222'


// export default 向往暴露成员，可以使用任意变量来接收
// 在一个模块中，export default 只允许向外暴露1次
// 在一个模块中，可以同时使用export 和 export default 向外暴露成员
// export  向往暴露成员，必须使用花括号和指定变量来接收（这种方式叫做按需导出）
// export  必须严格按照导出的变量名接收，如果在使用时想用别的名称，可以使用 as 起别名
// export  可以向外暴露多次
