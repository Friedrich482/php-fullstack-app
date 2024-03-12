type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};
const list = document.querySelector("#list") as HTMLUListElement;
const form = document.querySelector("#new-task-form") as HTMLFormElement;
const input = document.querySelector("#new-task-title") as HTMLInputElement;
const tasks: Task[] = loadTasks();
let id = 0;
tasks.forEach(addlistItem);

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask: Task = {
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

function addlistItem(task: Task) {
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
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
