"use strict";
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
const tasks = loadTasks();
let id = 0;
tasks.forEach(addlistItem);
form === null || form === void 0
  ? void 0
  : form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (
        (input === null || input === void 0 ? void 0 : input.value) == "" ||
        (input === null || input === void 0 ? void 0 : input.value) == null
      )
        return;
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
function addlistItem(task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list === null || list === void 0 ? void 0 : list.append(item);
}
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
