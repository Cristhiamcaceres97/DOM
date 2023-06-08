
const taskList = document.getElementById('task-list');
const newTaskForm = document.getElementById('new-task-form');
const editTaskForm = document.getElementById('edit-task-form');
const editTitleInput = document.getElementById('edit-title');
const editDescriptionInput = document.getElementById('edit-description');
const editDueDateInput = document.getElementById('edit-due-date');
const editListSelect = document.getElementById('edit-list');


let tasks = [];


function addTask(task) {
  tasks.push(task);
  renderTasks();
}


function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.title;
    
  
    li.addEventListener('click', () => {
      editTaskForm.style.display = 'block';
      editTitleInput.value = task.title;
      editDescriptionInput.value = task.description;
      editDueDateInput.value = task.dueDate;
      editListSelect.value = task.list;
    });
    
    taskList.appendChild(li);
  });
}


newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    list: 'Pendiente'
  };
  
  addTask(task);
  

  newTaskForm.reset();
});


editTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = editTitleInput.value;
  const description = editDescriptionInput.value;
  const dueDate = editDueDateInput.value;
  const list = editListSelect.value;
  
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    list: list
  };
  

  tasks.splice(tasks.indexOf(task), 1, task);
  

  editTaskForm.style.display = 'none';
  
  renderTasks();
});


renderTasks();