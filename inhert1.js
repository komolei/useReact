const deepCopy = (obj) => {
    const keys = Object.keys(obj)
    let result = {}
    let key, temp;
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]
        temp = obj[key]
        if (typeof temp == 'object' && temp) {
            result[key] = deepCopy(temp)
        } else {
            result[key] = temp
        }
    }
    return result
}

let obj = {
    name: {
        naem: {
            aa: {
                cc: 'xx',
                age: 25
            }
        }
    }
}
deepCopy(obj)



// inhert


function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayName = function () {
    console.log('this.name', this.name);
}

function U(name, age, sex) {
    this.sex = sex;
    User.call(this, name, age)
}

// U.prototype = new User()

function inherit(parent, child) {
    const obj = Object.create(child.prototype)
    child.prototype = Object.assign({}, parent.prototype, obj)
    parent.constructor = child
}

inherit(User,U)
U.prototype.saySex = function () {
    console.log('this.sex', this.sex);
}
const newU = new U('clc', 25, 'mela')
newU.saySex()
newU.sayName()