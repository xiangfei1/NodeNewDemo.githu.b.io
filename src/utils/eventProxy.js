// 兄弟组件之间通过发布-订阅模式实现传值
const eventProxy = {
    onObj: {},
    oneObj: {},
    on: function(key,fn) {
        if(this.onObj[key] == undefined) {
            this.onObj[key] = []
        }
        this.onObj[key].push(fn)    //判断
    },
    one: function(key,fn) {
        if(this.oneObj[key] == undefined) {
            this.oneObj[key] = []
        } 
        this.oneObj[key].push(fn)
    },
    off: function(key) {
        this.onObj[key] = []
        this.oneObj[key] = []
    },
    trigger: function() {
        let key, args
        if(arguments.length == 0) {
            return false
        }
        key = arguments[0]
        args = [].concat(Array.prototype.slice.call(arguments,1))
        // console.log(key+'====='+args)
        if(this.onObj[key] != undefined && this.onObj[key].length > 0) {
            for(let i in this.onObj[key]) {
                this.onObj[key][i].apply(null,args) //改变this 的指向
            }
        }
        // console.log(this.onObj[key][0])
    }
}

export default eventProxy