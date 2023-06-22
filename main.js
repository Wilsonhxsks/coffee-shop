//styling nav
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("header ul li");
console.log(nav)
nav.addEventListener("click",()=>{
    ul.classList.toggle("display")
})
//buttoms
let home = document.querySelector("ul li");
let about = home.nextElementSibling;
let products = about.nextElementSibling;
let store = products.nextElementSibling;
let lis = document.querySelectorAll("ul li")
lis.forEach((ele) =>{
    ele.addEventListener("click",(e)=>{
        lis.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})
about.addEventListener("click",()=>{
    window.open("./about.html","_self")
})

products.addEventListener("click",()=>{
    window.open("./products.html","_self")
})

store.addEventListener("click",()=>{
    window.open("./store.html","_self")
})
//styling footer
let footer = document.querySelector("footer")
let date = new Date()
footer.textContent+=date.getFullYear()
