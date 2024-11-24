const taskInput = document.querySelector('.task');
const taskBtn = document.querySelector('.btn');
const taskList = document.querySelector('.todo__list-container');
const errorText = document.querySelector('.todo__error-text');

function showError() {
  taskInput.style.border = '2px solid red';
  errorText.classList.remove('hidden');
  task.classList.add('error');
  taskBtn.classList.add('error');
}

function hideError() {
  taskInput.style.border = 'none';
  errorText.classList.add('hidden');
  task.classList.remove('error');
  taskBtn.classList.remove('error');
}

function addTask() {
  if (taskInput.value === '') {
    showError();
  } else {
    const newList = document.createElement('li');
    newList.textContent = taskInput.value;
    taskList.appendChild(newList);

    const deleteList = document.createElement('span');
    deleteList.textContent = '\u00D7';
    newList.appendChild(deleteList);

    taskInput.value = '';
    hideError();
  }
}

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
});
