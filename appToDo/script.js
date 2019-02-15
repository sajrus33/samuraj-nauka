"use strict";
const taskSubmit = document.querySelector(".editor__submit--task");
const taskDescribe = document.querySelector(".editor__describe--task");


const searchPanel = document.querySelector(".editor__wrapper--search");
const createBtn = document.querySelector(".editor__create");
const createPanel = document.querySelector(".editor__wrapper--category")

const searchInput = document.querySelector(".editor__search");
let tasks = document.querySelectorAll(".main__task");
const list = document.querySelector(".main");
console.log(tasks);

let newTaskDescribe = "";

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();

  let activeTasks = [...tasks];

  activeTasks = activeTasks.filter(task =>
    task.textContent.toLowerCase().includes(searchText)
  );
  // remove complete li element1
  tasks.forEach(task => task.parentNode.style.display = "none");

  tasks.forEach((task) => {
    activeTasks.forEach(active => {
      if (task == active) {
        task.parentNode.style.display = "flex";
      }
    });
  });
  // activeTasks.forEach(task => task.parentNode.style.display = "flex");

}


const getTaskDescribe = e => {
  newTaskDescribe = e.target.value;
  console.log(newTaskDescribe);
}

const createTask = (describe) => {
  if (!newTaskDescribe) return alert("Task describe is empty");
  //li
  const newTask = document.createElement("li");
  newTask.classList.add("main__li");
  //done
  const newDone = document.createElement("button");
  newDone.classList.add("main__button");
  newDone.classList.add("main__button--done");
  newDone.innerText = "done";
  //delete
  const newDelete = document.createElement("button");
  newDelete.classList.add("main__button");
  newDelete.classList.add("main__button--delete");
  newDelete.innerText = "delete";
  //p
  const newDescribe = document.createElement("p");
  newDescribe.classList.add("main__task");
  newDescribe.innerText = describe;
  console.log(taskDescribe.value);
  //complete 
  newTask.appendChild(newDone);
  newTask.appendChild(newDelete);
  newTask.appendChild(newDescribe);
  list.appendChild(newTask);

  //li element refresh
  tasks = document.querySelectorAll(".main__task");

  btnsDone = document.querySelectorAll(
    "li.main__li button.main__button--done"
  );
  btnsDone.forEach(item => item.addEventListener("click", doneTask));
  btnsDelete = document.querySelectorAll(
    "li.main__li button.main__button--delete"
  );
  btnsDelete.forEach(item => item.addEventListener("click", deleteTask));
}

const doneTask = e => {
  e.target.parentNode.style.transform = "translate(50%,0)";
  e.target.parentNode.style.backgroundColor = "black";

  // e.target.parentNode.style.textDecoration = "line-through";
  e.target.remove();
};
const deleteTask = e => {
  e.target.parentNode.remove();
  // wyszukiwane=noralne
  // e.target.parentNode.style.transform = "translate(150%," + 0 + "%)";
  console.log(e.target.parentNode);
  // setTimeout(function () {
  // }, 50);
};

//li element
let btnsDone = document.querySelectorAll(
  "li.main__li button.main__button--done"
);
btnsDone.forEach(item => item.addEventListener("click", doneTask));
let btnsDelete = document.querySelectorAll(
  "li.main__li button.main__button--delete"
);
btnsDelete.forEach(item => item.addEventListener("click", deleteTask));


taskDescribe.addEventListener("input", getTaskDescribe);

searchInput.addEventListener("input", searchTask);



createBtn.addEventListener("click", function () {
  searchPanel.classList.toggle("off");
  createPanel.classList.toggle("off");

});


taskSubmit.addEventListener("click", function () {
  createTask(newTaskDescribe);
}, false);


