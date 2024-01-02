const inputEl = document.getElementById("input")
const addBtn = document.getElementById("add")
const ulEl = document.getElementById("myUl")


//to add tasks after clicking on add
addBtn.addEventListener("click", function(){
    // ulEl.innerHTML += `<li class='check'> ${inputEl.value} </li>`
 
    if (inputEl.value === "") {
        alert("Please add a task") 
    } else {
        appendItemIntoUl(inputEl.value, "X")
    }
    inputEl.value = ""
})




function appendItemIntoUl(value,icon) {

    // step by step to creating an li element function
    // 1) Create a <li></li>
    // 2) To add text inside of <li>
    // 3) To add into the ul
    let newEl = document.createElement("li")
    newEl.classList.add("check")
    newEl.textContent = value
    

    // create a close element function
    // 1) Create a <span></span>
    // 2) To add X inside span
    // 3) To add into the div
    let closeEl = document.createElement("span")
    closeEl.classList.add("close")
    closeEl.textContent = icon
 
    // create a div element function
    // 1) Create a <div></div>
    // 2) To add li and span
    let divEl = document.createElement("div")
    divEl.classList.add("list")
    ulEl.append(divEl)
    divEl.append(newEl)
    divEl.append(closeEl)

    // To remove the certain element after a click
    closeEl.addEventListener("click", function(){
        let div = this.parentElement
        div.style.display = "none"
        
    })

}




//to strike off tasks that has been completed
ulEl.addEventListener("click",function(ev) {

    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("strike")
    }

})



