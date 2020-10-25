//第一题、计算消费和总金额
console.log("---------------------第一题--------------------");
const tipCalculator = bills => {
    const tips = []
    const costs = []
    bills.forEach(bill =>{
        let tip;
        if (bill < 50){
            tip = bill * 0.2
        }else if(bill >=50 && bill < 200){
            tip = bill * 0.15
        }else{
            tip = bill * 0.1
        }
        const cost = bill + tip
        tips.push(tip)
        costs.push(cost)
    })
    console.log("各自的小费为："+tips); //消费
    console.log("各自的总金额为："+costs); //总金额
}
tipCalculator([124,48,268])

// 原函数为：
// function mean(a,b,c){
//     return (a+b+c) /3
// }
// (1).如果要求任意个数的数字的平均值，请编写改进的mean1()函数，让该函数可以计算任意个数的数字的平均值
console.log("------------------------第二题---------------------");
let avg = function mean1(...numbers){
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log("平均值为："+avg(1,2,3,4));
//(2).请编写函数mean2()，使用数组的reduce()函数改写mean1(),让代码更加精简
const mean2 = (...args) => {
    const sum = args.reduce((pre,cur) => pre + cur)
    return sum / args.length
}
console.log("平均值为："+mean2(2,3,4,5));
//(3).请在第二步的基础上编写函数mean3()，实现只对数组的偶数求平均值
const mean3 = (...args) => {
    const evens = args.filter(i => i % 2 == 0)
    return mean2(...evens)
}
console.log("平均值为："+mean3(2,3,4,5));