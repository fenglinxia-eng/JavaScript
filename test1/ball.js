//1、4 计算每队的平均分
var JohnScore = (89 + 120 + 103) / 3;
var MikeScore = (116 + 94 +123) / 3;
var MaryScore = (97 + 134 +105) / 3;
console.log("John队的平均分为：" + JohnScore + "\n", "Mike队的平均分为：" + MikeScore + "\n", "Mary队的平均分为：" + MaryScore + "\n");
//2. 决定哪只球队获胜（包含2,3,4,5问）
if(JohnScore > MikeScore && JohnScore > MaryScore){
    console.log("John队获胜，平均分为："+JohnScore)
} else if(MikeScore > JohnScore && MikeScore > MaryScore){
    console.log("Mike队获胜，平均分为："+MikeScore)
} else if(MaryScore > JohnScore && MaryScore > MikeScore){
    console.log("Mary队获胜，平均分为："+MaryScore)
} else if(JonhnScore = MikeScore && JohnScore > MaryScore){
    console.log("John队和Mike队平局获胜，平均分为："+JohnScore)
} else if(JonhnScore = MaryScore && JohnScore > MikeScore){
    console.log("John队和Mary队平局获胜，平均分为："+JohnScore)
} else if(MikeScore = MaryScore && MikeScore > JohnScore){
    console.log("John队和Mary队平局获胜，平均分为："+JohnScore)
} else{
    console.log("三队平局，平均分为："+JohnScore)
}
