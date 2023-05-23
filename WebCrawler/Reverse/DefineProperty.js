/*拦截属性设置新的值*/
var user = {}
user.name = 'jay'

Object.defineProperty(user, 'name', {
    value: 'andy'
})

// console.log(user.name)

/* 拦截并设置新的属性*/
var age = 18;

Object.defineProperty(user, 'count', {
    get: function () {
        return age
    }
})

console.log(user.count)


/*拦截document cookie*/
var cookieTemp = '';
Object.defineProperty(document, 'cookie', {
    set: function (val) {
        if (val.indexOf('v') != -1) {
            debugger;
        }
        cookieTemp = val;
        return val;
    },
    get:function () {
        return cookieTemp;
    }
})