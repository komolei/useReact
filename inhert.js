// 组合继承
function User(name, password) {
    this.name = name;
    this.password = password;
}

User.prototype.sayName = function () {
    console.log('this.name is', this.name)
}

function P(name, password, sex) {
    User.call(this, name, password);
    this.sex = sex;
}
P.prototype = new User()
const p = new P('k', '1')


// 原型继承

function createObject(f) {
    function fn() {

    }
    fn.prototype = f;
    return new fn()
}

function User(name, password) {
    this.name = name;
    this.password = password;
}
User.prototype.sayName = function () {
    console.log('this.name is', this.name)
}
function P(name, password) {
    User.call(this, name, password)
}
inherit(P, User)
function inherit(child, parent) {
    const obj = Object.create(parent.prototype)
    child.prototype = Object.assign(obj, child.prototype);
    parent.constructor = child
}

const p = new P('kx', 122)




// deep copy 

function deepCopy(obj) {
    let result = {};
    let keys = Object.keys(obj);
    let key, temp = null;

    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        temp = obj[key]
        if (temp && typeof temp == 'object') {
            result[key] = deepCopy(temp)
        }
        else {
            result[key] = temp
        }

    }
    return result;
}
var a = {
    name: 'komolei',
    info: {
        sex: 'male',
        age: {
            isOld: true
        }
    }
}
var b = deepCopy(a)



function a() {
    console.log('a')
}
function b() {
    console.log('b')
}

async function c(a, b) {
    await a();
    await b()
}
c(a, b)