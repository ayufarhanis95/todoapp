const inputEl = document.getElementById("input")
const addBtn = document.getElementById("add")
const ulEl = document.getElementById("myUl")

// console.log(liEl)



addBtn.addEventListener("click", function(){
    ulEl.innerHTML += `<li class='check'> ${inputEl.value} </li>`
    inputEl.value = "";
})



ulEl.addEventListener("click",function(ev) {

    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("strike")
    }

})

