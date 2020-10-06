console.log('hello');

let strName = 'feng', stLastName = 'lin', nAge = 20
strName = 2
console.log(strName)

const isHuman = true

console.log(typeof isHuman,typeof typeof isHuman)

let age = 20
console.log(typeof age)

let money1 = 0.1
let money2 = 0.2
let money3 = money1 + money2
console.log(money3.toPrecision(1))

let a = undefined
console.log(a)

let oStudent = null
console.log(typeof oStudnet)

let c = 
'
<header>${a}</header>
<div>${b}</div>
'
//Symbol命名
const b = Symbol();
console.log(typeof b)

let a = (1,2,3,3,5)

console.log(a);

a = 1;
b = 1;

console.log(a == b)
console.log(undefined === null)

/*
let age = 20
let a = (age >= 30? 'order':'youth')
*/

let a = (age >= 30 ? 'order':'younth')
console.log(a)

const oStudent = {
    name = 'fenglinxia',
    age = 49
}

//运行的时候可以给对象加属性加方法
console.log('name1' in oStudent);

const oStu = [1,2,3,4];
console.log(2 in oStu)

const oStu = new Array()
console

//一元、三元以及赋值运算符