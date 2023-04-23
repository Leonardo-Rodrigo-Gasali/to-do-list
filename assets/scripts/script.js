/* To Do List */
let input = document.querySelector(".input");
let btnAdd = document.querySelector("#btn-add");
let container = document.querySelector(".container");

class items {
    constructor(task) {
        this.createDiv(task)
    }
    createDiv(task) {
        let inputItems = document.createElement("input")
        inputItems.type = "text"
        inputItems.value = task
        inputItems.disabled = true
        inputItems.classList.add("item-input")

        let btnAdd = document.createElement("button")
        btnAdd.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        btnAdd.classList.add("btn")

        let btnDelete = document.createElement("button")
        btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`
        btnDelete.classList.add("btn")

        let item = document.createElement("div")
        item.appendChild(inputItems)
        item.appendChild(btnAdd)
        item.appendChild(btnDelete)
        item.classList.add("item")
        container.appendChild(item)

        btnAdd.addEventListener("click", function () {
            if (inputItems.disabled === true) {
                inputItems.disabled = false
                btnAdd.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
            } else {
                inputItems.disabled = true
                btnAdd.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
            }
        })
        btnDelete.addEventListener("click", function () {
            item.remove()
        })
    }
}


function verifyInput() {
    if (input.value === "") {
        alert("Add new Task")
    } else {
        new items (input.value)
        input.value = ""
    }
}

btnAdd.addEventListener("click", function () {
    verifyInput()
})

document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        verifyInput()
    }
})


/* Copyright Date */
const year = document.getElementById('currYear');
year.innerHTML = new Date().getFullYear();