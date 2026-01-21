let task = document.querySelector('input');
let addTaskBtn = document.querySelector('i.fa-circle-plus');
let box = document.querySelector('input.checkbox');
let listContainer = document.querySelector('ul');
let deleteTaskBtn = document.querySelector('.fa-trash-can');


const generateTaskList = () => {
    if (task.value === '') {
        alert('Add some task!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<input class="checkbox" type="checkbox">${task.value}<i class="fa-solid fa-trash-can"></i>`;
        listContainer.appendChild(li);
    }

    task.value = '';
    saveData();
}

addTaskBtn.addEventListener('click', generateTaskList);

listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.checked) {
        saveData();
    } else if (!(e.target.checked)) {
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showList = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showList();