"use strict";
const list = document.querySelector("#list");
const formCreate = document.querySelector("#new-task-form");
const deleteForm = document.querySelector("#deleteForm");
const input = document.querySelector("#new-task-title");
const deleteTaskInput = document.querySelector("#delete-task");
let tasks = loadTasks();
let id = tasks.length ? tasks[tasks.length - 1].id : 0;
tasks.forEach(addlistItem);
formCreate.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value == "" || input.value == null) return;
  const newTask = {
    id: id + 1,
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  id += 1;
  tasks.push(newTask);
  saveTasks();
  addlistItem(newTask);
  input.value = "";
});
deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let taskToDelete = deleteTaskInput.value;
  let found = false;
  tasks.forEach((task) => {
    if (task.title === taskToDelete) {
      let index = tasks.indexOf(task);
      tasks.splice(index, 1);
      saveTasks();
      const child = document.getElementById(`${task.id}`);
      list.removeChild(child);
      found = true;
      deleteTaskInput.value = "";
    }
  });
  if (!found) {
    console.log("This task wasn't founded");
  }
});
function addlistItem(task) {
  const item = document.createElement("li");
  item.id = task.id.toString();
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  checkbox.classList.add("size-5", "accent-violet-600");
  label.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "gap-4",
    "text-white",
    "hover:scale-110",
    "transform",
    "duration-700",
  );
  item.append(label);
  list.append(item);
}
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
const footerToDo = document.querySelector("footer");
footerToDo.classList.add("text-white", "MV-boli");
const imageFooterToDo = footerToDo.querySelector("img");
imageFooterToDo.src = "../../assets/icons/rocket.gif";
footerToDo.classList.add("mt-8");
