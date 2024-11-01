// =================================================================Assignmnet no 13 =================================================================================================
// Task 1: Implement a function to find the maximum number in an array


var abcd = prompt("Enter");
var split  = abcd.split(" ");
var arr = [];

for (let i = 0; i < split.length; i++) {
   var upper = split[i].slice(0,1).toUpperCase();
   var further = split[i].slice(1);
   var result = upper + further;
   arr.push(result)
  
   console.log(result);
}
var array  =  arr.join(" ")
console.log(array);

//Task No 2
// var str  = "saylani mass it traing";
// var prompt = prompt("enter whats you want to find")
// for (let ii = 0; ii < str.length; ii++) {
//     if(str.slice(ii,ii + 4) === prompt){
//         alert("find")
//     }
   
// }

//Task No 3

var str  = "saylani mass it traing";
var indexoff = str.indexOf("mass")
console.log(indexoff);

// Task No 4
var str  = "saylani mass it traing";
var str1 = str.replaceAll("saylani mass it traing","SMIT");
console.log(str1);

// var rightNow = new Date();
// var week = ["sun","mon","tues","wed","thurs","fri","sat"]
// var month = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"]
// var monthRes = rightNow.getMonth()
// var day  = rightNow.getDay() //5
// console.log(week[day]);//5
// console.log(month[monthRes]);
