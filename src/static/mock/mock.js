

const list = require('./list.json');

const detail = require('./detail.json');
module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        list: list,
        //相当于 localhost:3000/two  -> list
        two: list,
        three : detail
    }
}
//其中 list 数据可以通过  reuqire.js 进行引用 所以可以引用多个.json 文件