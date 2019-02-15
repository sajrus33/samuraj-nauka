const searchInput = document.querySelector(".editor__search");
const tasks = document.querySelectorAll(".main__task");
const list = document.querySelector(".main");
console.log(tasks);

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();

  let activeTasks = [...tasks];

  activeTasks = activeTasks.filter(task =>
    task.textContent.toLowerCase().includes(searchText)
  );
  // remove complete li element
  tasks.forEach(task => task.parentNode.remove());
  //create li element that found
  activeTasks.forEach(task => list.appendChild(task.parentNode));
};

const btnsDone = document.querySelectorAll(
  "li.main__li button.main__button--done"
);

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
  }, 500);
};
searchInput.addEventListener("input", searchTask);

btnsDone.forEach(item => item.addEventListener("click", doneTask));

document.querySelectorAll("li.main__li button.main__button--delete")
  .forEach(item => item.addEventListener("click", deleteTask));