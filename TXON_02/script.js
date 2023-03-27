const screen = document.querySelector(".screen")
const btns = document.querySelectorAll(".btn")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")

btns.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        screen.innerHTML+=btn.innerHTML
    })
})
equal.addEventListener("click",()=> {
    screen.innerHTML = eval(screen.innerHTML)
})
clear.addEventListener("click",()=> {
    screen.innerHTML = ""
})
