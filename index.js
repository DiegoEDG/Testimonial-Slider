let btnLeft=document.getElementById("btn-left")
let btnRight=document.getElementById("btn-right")
let slider1=document.getElementById("slider1")
let slider2=document.getElementById("slider2")

btnRight.addEventListener("click",(()=>{
    slider1.classList.add("hide")
    slider2.classList.remove("hide")
}))
btnLeft.addEventListener("click",(()=>{
  slider2.classList.add("hide")
  slider1.classList.remove("hide")
}))