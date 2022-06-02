// eslint-disable-next-line import/no-cycle
import removeTask from './taskRemove.js';
import checkBoxEvent from './TaskComplete.js';
import editTasks from './taskEdit.js';

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const listCreate = (items) => {
  items.sort(compare);
  let editedTasks = '';
  items.forEach((item) => {
    let checked = '';
    if (item.completed) {
      checked = ' checked';
    }
    editedTasks += `<div class="item${checked}"><input class="checkbox" value="${item.index}" type="checkbox"${checked}><input class="taskText" type="text" value="${item.description}"><i class="far fa-trash-alt fa-lg"></i></div>`;
  });
  const list = document.getElementById('todolist');
  list.innerHTML = editedTasks;
  checkBoxEvent(items);
  editTasks(items);
  removeTask(items);
};

const addTask = (items) => {
  const input = document.querySelector('.add');
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const newTask = {
        description: input.value,
        completed: false,
        index: items.length + 1,
      };
      items.push(newTask);
      listCreate(items);
      input.value = '';
      localStorage.localData = JSON.stringify(items);
    }
  });
};

export { addTask, listCreate };