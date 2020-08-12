var input = document.querySelector(".todo__input");
var btn = document.querySelector(".todo__submit");
var itemList = document.querySelector(".task__list");
var items = [];

function createElements(text) {
    items.push(text);
    saveToStorage(items);
    let newElem = document.createElement("div");
    let deletebtn = document.createElement("div");
    newElem.className = "task__item";
    deletebtn.textContent = "delete"
    newElem.textContent = text;
    itemList.appendChild(newElem);
}
btn.addEventListener("click", function(e){
    e.preventDefault();
    if(!(input.value === "enter: " || input.value === "")) {
        createElements(input.value);
        input.value = "";
    }
})

function saveToStorage(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

function getFromStorage() {
    let listString = localStorage.getItem('items');
    if (listString === null) {
        return [];
    }
    else {
        return JSON.parse(listString);
    }
}

function init() {
    getFromStorage().forEach(function (value) {
        createElements(value);
    })
}

init();