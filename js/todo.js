window.onload = () => {
    const res = JSON.parse(localStorage.getItem('tasks'))

    if (res) {
        res[0].map(i => {
            if (i.status == 'pending') {
                return addTaskToPending(i.taskName)
            } 
        })
    }
}



const addTaskBtn = document.querySelector("#newtaskbtn");
addTaskBtn.addEventListener("click", () => addTask());

const createButton = (value, cb) => {
  const btn = document.createElement("button");
  btn.innerText = value;
  btn.addEventListener("click", cb);
  return btn;
};

const createEditBtn = () =>
  createButton("edit", (event) => editTask(event.target));
const createDoneBtn = () =>
  createButton("done", (event) => doneTask(event.target));

const addTask = () => {
  const taskInput = document.querySelector("#new-task");
  if (taskInput.value) {
    addTaskToPending(taskInput.value); 

    const taskData = {
        taskName: taskInput.value,
        status: 'pending'
    }

    const res = JSON.parse(localStorage.getItem('tasks'))
    
    if (res) {
        res.push(taskData)
        localStorage.setItem('tasks', JSON.stringify([res]))
    } else {
        localStorage.setItem('tasks', JSON.stringify([taskData]))
    }

    // const task = {'taskName': taskInput.value, 'status': 'pending'}

    // localStorage.setItem('task', JSON.stringify(task))


    taskInput.value = ""; 
  } else {
    alert('please add a task')
  }
  
};

const addTaskToPending = (task) => {
  const pendingTasksContainer = document.querySelector(".pending-tasks");
  const div = document.createElement("div"); // creating an empty div
  const p = document.createElement("p"); // creating an empty paragraph element
  p.innerText = task; // adding the received value in parameter as a text inside paragraph element
  div.appendChild(p); // adding the paragraph element inside the div we created above
  div.appendChild(createEditBtn());
  div.appendChild(createDoneBtn());
  pendingTasksContainer.appendChild(div); // adding the div, now with paragraph and two button elements inside pendingTasksContainer div
};

const doneTask = (data) => {
  console.log(data);
  const div = data.closest("div"); // looking for the closes div ancestor
  const p = div.querySelector("p"); // looking for paragraph element inside the selected div
  const redoBtn = createButton("redo", (e) => redoTask(e.target));
  const delBtn = createButton("delete", (e) => delTask(e.target));
  div.replaceChildren(p, redoBtn, delBtn); // what all children the div had is not being replaced by the passed elements
  const completedTasksContainer = document.querySelector(".done-tasks");
  completedTasksContainer.appendChild(div);
};

const editTask = (data) => {
  const div = data.closest("div");
  const val = div.querySelector("p").innerText;
  const saveBtn = createButton("save", (e) => saveTask(e.target));
  const cancelBtn = createButton("cancel", (e) => cancelEdit(e.target, val));
  const input = document.createElement("input");
  input.value = val;
  div.replaceChildren(input, saveBtn, cancelBtn);
};

const cancelEdit = (data, value) => {
  const div = data.closest("div");
  const p = document.createElement("p");
  p.innerText = value;
  div.replaceChildren(p, createEditBtn(), createDoneBtn());
};

const saveTask = (data) => {
  const div = data.closest("div");
  const val = div.querySelector("input").value;
  const p = document.createElement("p");
  p.innerText = val;
  div.replaceChildren(p, createEditBtn(), createDoneBtn());
};

const redoTask = (data) => {
  const div = data.closest("div");
  const p = div.querySelector("p");
  div.replaceChildren(p, createEditBtn(), createDoneBtn());
  const pendingTasksContainer = document.querySelector(".pending-tasks");
  pendingTasksContainer.appendChild(div);
};

const delTask = (data) => {
  const div = data.closest("div");
  div.remove();
};
