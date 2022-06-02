import './style.css';
import { addTask, listCreate } from './modules/taskAdd.js';
import clearAll from './modules/clearCompleteTask.js';

let tasks = [];

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    tasks = JSON.parse(localStorage.localData);
  }
};

getLocalData();
listCreate(tasks);
addTask(tasks);
clearAll(tasks);