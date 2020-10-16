//定义对象
let person = new Object();
person.name = 'fenglinxia';
person.age = 20;

// let person = ();
// person.name = 'fenglinxia';
// person.age = 20;

// let person = {
//     name = 'fenglinxia',
//     age = '20'
// };

// console.log(person.name);
// console.log(person.age);
// console.log(typeof person);

//对象字面量
let person1 = {};
let s = `
    <div>
        <h1>dasda</h1>
    </div>
`;
let a = '';

person1.name = 'fenglinxia';
person1.age = 20;

let person2 = {
    name : 'fenglinxia',
    age:20
};
console.log(person2.name);
console.log(person2.age);

//数组
//定义数组
const oArray = [];
const oArray1 = new Array();

//判断变量是否是数组
console.log(typeof oArray) //Object
console.log(oArray instanceof Array) //true

//数组初始化
const heroes = [];
console.log(heroes[0]);
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '美国队长';
heroes[3] = '变形金刚';
console.log(heroes);

//数组字面量
const avengers = ['美国队长','变形金刚','钢铁侠','蜘蛛侠'];
console.log(avengers);

//不同类型的元素
const mixedArray = [null,1,[],'two',true];
console.log(mixedArray)

//删除数组元素
const avengers1 = ['美国队长','钢铁侠','雷神','蜘蛛侠'];
delete avengers1[3];
console.log(avengers1);

//解构数组
//不使用解构
const foo = [1,2,3];
let b = foo[0];
let c = foo[1];
let d = foo[2];
console.log('a=${a},b=${b},c=${c}');

//使用解构
const foo1 = [1,2,3];
const [e,f,g] = foo1;
console.log('e=${e},f=${f},g=${g}');
///=
const {entries,fill,h} = [1,2,3];
console.log('e=${e},f=${f},g=${g}');

//数组的属性和方法
const avengers2 = ['美国队长','钢铁侠','蜘蛛侠','超级飞侠'];
console.log(avengers2.length);
console.log(avengers2[avengers2.length-1]);

avengers2.length = 8;
console.log(avengers2);

avengers2.length = 3;
console.log(avengers2);

avengers2.pop();
console.log(avengers2);

avengers2.push('黑寡妇');
console.log(avengers2);

avengers2.shift();
console.log(avengers2);

avengers2.unshift("灭霸");
console.log(avengers2);
//concat
const avengers3 = ['美国队长','钢铁侠','雷神','绿巨人'];
const heroes1 = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];

const ah = avengers3.concat(heroes1);
console.log(ah);
console.log(avengers3);
console.log(heroes1);
//join()
const avengers4 = ['美国队长','钢铁侠','雷神','绿巨人'];
const j = avengers4.join();
console.log(j);
const k = avengers4.join('&');
console.log(k);
//slice
const avengers5 = ['美国队长','雷神','黑寡妇','绿巨人','蜘蛛侠'];
const l = avengers5.slice(2,3);
console.log(l);
console.log(avengers5);
//splice
const m = avengers5.splice(1,2,'蝙蝠侠');
console.log(m);
console.log(avengers5);
//reverse
const n = ['a','b','c','d'];
const p = n.reverse();
console.log(n);
console.log(p);
//sort
const c1 = [1,2,3,4,10,9];
const d1 = c1.sort();
console.log(d1);
console.log(c1);
//indexOf,includes
console.log(avengers5.indexOf('钢铁侠'));
console.log(avengers5.includes('超人'));
console.log(avengers5.includes('美国队长',3));

//多维数组
const coordinates = [[1,3],[4,2]];
console.log(coordinates);
console.log(coordinates[0][1]);//第一个数组中的第二个值
const summer = ['Jun','Ju1','Ju2'];
const winter = ['Dec','Jan','Feb'];
const nested = [summer,winter];
console.log(nested);
const flat = [...summer,...winter];//扁平化
console.log(flat);

//set
const list = new Set();
list.add(1);
list.add(2);
list.add(3).add(4).add(5);//链式用法
list.add(1);//忽略重复值
console.log(list);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

const list2 = new Set([7,7,7,7,8,8,8,8]);
console.log(list2);

const list3 = new Set(['hello']);
console.log(list3);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);
console.log(list4.size);
console.log(list4.has('the'));
console.log(list4.has('THE'));
list4.delete('the');
console.log(list4);
list4.clear();
console.log(list4);

//Set与数组转换
const shoppingSet1 = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray1 = [...shoppingSet1];
console.log(shoppingArray1);

const shoppingSet2 = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray2 = Array.from(shoppingSet2);
console.log(shoppingArray2);

//数组去重
const duplicate = [3,1,4,1,5,9,2,6,5,3,5,9];
const nonDuplicate = [...new Set(duplicate)];
console.log(nonDuplicate);

//WeakSet
let array = [1,2,3];
const strong = new Set().add(array);
console.log(strong.has(array));
array = null; //删除对原始对象的引用
array = [...strong][0];
console.log(array);

let array2 = [1,2,3];
const weak = new WeakSet().add(array2);
console.log(weak.has(array));
array2 = null;
//array2 = [...weak][0];
console.log(array2);

//map
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'Iv').set(5,'V');
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(4));
console.log(romanNumerals.has(3));
console.log(romanNumerals.delete(1));
console.log(romanNumerals.size);
romanNumerals.clear();
console.log(romanNumerals.size);
console.log(...romanNumerals);
//Arrary.from()方法
console.log(Array.from(romanNumerals));
