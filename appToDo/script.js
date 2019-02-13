const taskSubmit = document.querySelector(".editor__submit--task");
const taskDescribe = document.querySelector(".editor__describe--task");


const searchPanel = document.querySelector(".editor__wrapper--search");
const createBtn = document.querySelector(".editor__create");
const createPanel = document.querySelector(".editor__wrapper--category")

const searchInput = document.querySelector(".editor__search");
const tasks = document.querySelectorAll(".main__task");
const list = document.querySelector(".main");
console.log(tasks);

let newTaskDescribe = "My task";

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();

  let activeTasks = [...tasks];

  activeTasks = activeTasks.filter(task =>
    task.textContent.toLowerCase().includes(searchText)
  );
  // remove complete li element
  tasks.forEach(task => task.parentNode.remove());
  activeTasks.forEach(task => list.appendChild(task.parentNode));
};

const btnsDone = document.querySelectorAll(
  "li.main__li button.main__button--done"
);

const getTaskDescribe = e => {
  newTaskDescribe = e.target.value;
}

const createTask = (describe) => {
  list.
}

const doneTask = e => {
  e.target.parentNode.style.transform = "translate(50%,0)";
  e.target.parentNode.style.backgroundColor = "black";

  // e.target.parentNode.style.textDecoration = "line-through";
  e.target.remove();
};
const deleteTask = e => {
  e.target.parentNode.style.transform = "translate(150%," + 0 + "%)";
  setTimeout(function () {
    e.target.parentNode.remove();
  }, 350);
};


taskDescribe.addEventListener("input", getTaskDescribe);

searchInput.addEventListener("input", searchTask);

btnsDone.forEach(item => item.addEventListener("click", doneTask));

document.querySelectorAll("li.main__li button.main__button--delete")
  .forEach(item => item.addEventListener("click", deleteTask));

createBtn.addEventListener("click", function () {
  searchPanel.classList.toggle("off");
  createPanel.classList.toggle("off");

});




taskSubmit.addEventListener("click", createTask(newTaskDescribe), false);


