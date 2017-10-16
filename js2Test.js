let input = document.querySelector('input');
let list = document.querySelector('ul');
let addTaskButton = document.querySelector('button');
addTaskButton.addEventListener('click', addTask);
function addTask(){
    let addNewTask = document.createElement('li');
    addNewTask.textContent = input.value;
    list.appendChild(addNewTask);
}
