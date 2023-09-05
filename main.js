const form = document.querySelector('form');
const input = document.querySelector('input');
const searchInput = document.querySelector('input.search')
const numberTasks = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task')
const ul = document.querySelector('ul');

const toDoList = [];

const removeItem = (e) => {
 const index = e.target.parentNode.dataset.key;
 toDoList.splice(index, 1);
 renderList();
 numberTasks.textContent = listItems.length;

}

const addTask = (e) => {
    e.preventDefault(); // bez przełądowania strony
    const titleTask = input.value; // pobieram wpisany tekst
    if (titleTask === '') return // wyjdź z funkcji gdy nie podany task
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button style="margin-left: 5px;">usuń</button>';

    toDoList.push(task);
    renderList();

    input.value = '';
    numberTasks.textContent = listItems.length;
    
    task.querySelector('button').addEventListener('click', removeItem)
}
 const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
 }

 const searchItem = (e) => {
    const searchText = e.target.value.toLowerCase();
    const tasks = [...listItems];
    result = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = '';
    result.forEach(li => ul.appendChild(li));
 }

form.addEventListener('submit', addTask);
searchInput.addEventListener('input', searchItem)

/**
 const form = document.querySelector('form');
const input = document.querySelector('input');
const numberTasks = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task')
const ul = document.querySelector('ul');

const toDoList = [];

const removeItem = (e) => {
    const index = e.target.parentNode.dataset.key;
    ul.removeChild(listItems[index]);
    toDoList.splice(index, 1);
    numberTasks.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === '') return
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button style="margin-left: 5px;">usuń</button>';
    ul.appendChild(task);
    toDoList.push(task);
    task.dataset.key = toDoList.length - 1;
    input.value = '';
    numberTasks.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeItem)
}

form.addEventListener('submit', addTask)
 */