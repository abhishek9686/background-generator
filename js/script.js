var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var body=document.getElementById("b");

c1.addEventListener("input",function(){
    b.style.background="linear-gradient(to right, "+c1.value+","+c2.value+")";
});
c2.addEventListener("input", function () {
    b.style.background = "linear-gradient(to right, " + c1.value + "," + c2.value + ")";
});
