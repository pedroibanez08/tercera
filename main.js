var btn =document.getElementById("btn");

brn.addEventListener("click",function(){
const xhttp=new XMLHttpRequest();
xhttp.open("GET","animals.json",true);
xhttp.onload=function(){
var	misdatos=JSON.parse(xhttp.responseText);
console.log(misdatos[0]);
};
xhttp.send();

});



