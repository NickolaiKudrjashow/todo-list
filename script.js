document.querySelector('.todo__submit').addEventListener('click', addTask);

var items = []

function addTaskBlock(newTextItem) {
    items.push(newTextItem);
    saveToStorage(items);
    let itemDiv = document.createElement('div');
    itemDiv.className = "task__item";
    itemDiv.innerText = newTextItem;
    document.querySelector('.task__list').appendChild(itemDiv);
}

function addTask() {
    let elementInput = document.querySelector('.todo__input');
    addTaskBlock(elementInput.value);
    elementInput.value = '';
}

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
        addTaskBlock(value);
    })
}

init();