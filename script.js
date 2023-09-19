var main=document.querySelector("body")

var cc=document.querySelector(".cursor")

main.addEventListener("mousemove",function(a){
    cc.style.left=a.x+"px"
    cc.style.top=a.y+"px"
})
