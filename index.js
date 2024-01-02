const inputEl = document.getElementById("input")
const addBtn = document.getElementById("add")
const ulEl = document.getElementById("myUl")
const liEl = document.querySelector("li")



addBtn.addEventListener("click", function(){
    ulEl.innerHTML += `<li> ${inputEl.value} </li>`
    inputEl.value = "";
})

ulEl.addEventListener("click", function(){
    
})

