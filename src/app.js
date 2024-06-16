/* eslint-disable */
import "bootstrap";
import "./style.css";

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const taskDescription = document.getElementById("taskInput").ariaValueMax;
  const task = new Task(taskDescription);
  addTaskToDom(task);
  taskForm.reset();
});

function addTaskToDom(task) {
  const li = document.createElement("li");
  li.textContent = task.description;

  const completeButton = documment.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    taskList.toggleComplete();
    li.classList.toggle("completed", task.completed);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}
