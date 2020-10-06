//1.用变量存储Mark和John的体重以及身高
var stu1 ={
    name : 'Mark',
    height : 1.60,
    mass : 45
}
var stu2 = {
    name : 'John',
    height : 1.70,
    mass : 50
}

//2. 计算二人的BMI
var BMI1 = stu1.mass / (stu1.height * stu1.height); 
var BMI2 = stu2.mass / (stu2.height * stu1.height);
console.log("markBMI:" + BMI1, "JohnBMI:"+BMI2);

//3. 创建一个布尔变量，用来包含Mark的BMI是否比John更高
var high = (BMI1 > BMI2) ? true : false;

//4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BMI是否比John更高?"  + String(high));