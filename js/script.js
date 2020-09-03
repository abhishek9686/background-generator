var _= require('lodash');
var array=[1,2,3,4,5,6,7,8];
console.log("answer:",_.without(array,3));
console.log(_);
var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var body=document.getElementById("b");

c1.addEventListener("input",function(){
    b.style.background="linear-gradient(to right, "+c1.value+","+c2.value+")";
});
c2.addEventListener("input", function () {
    b.style.background = "linear-gradient(to right, " + c1.value + "," + c2.value + ")";
});
