//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');  
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#tasks');

//Load all enent listerners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task events
    clearBtn.addEventListener('click', clearTasks);
    // Filter task event
    filter.addEventListener('keyup', filterTasks)
};

// Get tasks from LS
function getTasks() {
    let tasks;
       if (localStorage.getItem('tasks') === null) {
           tasks = [];
       }else{
           tasks = JSON.parse(localStorage.getItem('tasks'));
       }
       tasks.forEach(function (task) {
          // Create li elements
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Create text node and append to the li
            li.appendChild(document.createTextNode(task));
            // Create new link element
            const link = document.createElement('a');
            // Add task
            link.className = 'delete-item secondary-content';
            // Add icon html
            link.innerHTML = '<i class ="fa fa-remove"></i>';
            //append link to li 
            li.appendChild(link);
            // append li to ul
            taskList.appendChild(li);
  
       })
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
      alert('Add a Task');
    }

    // Create li elements
     const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add task
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class ="fa fa-remove"></i>';
    //append link to li 
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);

    // store in lc
    storeTaskInLocalStorage(taskInput.value);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}; 

 // store task in lc
 function storeTaskInLocalStorage(task) {
       let tasks;
       if (localStorage.getItem('tasks') === null) {
           tasks = [];
       }else{
           tasks = JSON.parse(localStorage.getItem('tasks'));
       }
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('are you sure you want to delete')) {
            e.target.parentElement.parentElement.remove()

        //   remove from LS
        removeTaskFromLocalStorage( e.target.parentElement.parentElement.remove)  
        }       
    }
};

// Remove task from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    };
    tasks.forEach(function(task, index){
    if (taskItem.textContent === task) {
        tasks.splice(index, 1);
    }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear tasks
function clearTasks() {
//    taskList.textContent = '';

    while (taskList.firstChild) {
        if (confirm('clear all tasks, can not be undone after clearing')) {
            taskList.removeChild(taskList.firstChild);  
         ;     
    }
};
    // clear from ls
    clearTasksFromLocalStorage();
};

// clear from ls
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
       const item = task.firstChild.textContent;
       if (item.toLowerCase().indexOf(text)!= -1) {
           task.style.display = 'block';
       } else{
           task.style.display = 'none';
       }
    })
}


//  https:jsperf.com/innerhtml-vs-removechild