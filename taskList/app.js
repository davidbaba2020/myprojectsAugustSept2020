alert("yes ooh");
//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load event Listerners function
function loadEventListeners(){
  //Add Tast event
  form.addEventListener('submt', addTask);
}


//ADD TASK
function addTask(e) }{
  if(taskInput.e.value ==='') {
    alert ('Kindly add a task please')
  }
}