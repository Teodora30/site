var seeMore=document.getElementsById("seemore");

seeMore.addEventListener ('click', deschidere1)

function deschidere1()
{
 var containertext1=document.getElementByClassName ("containertext");
 var text=containertext1[0];
 containertext1.style.height=1000 +"px";
}