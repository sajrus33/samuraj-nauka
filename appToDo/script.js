"use strict";

 
//      COMUNICAT
// if (!typeof(Storage) !== 'undefined') {
//   $('#yay').fadeIn('slow');
// } else {
//   $('#ooh').fadeIn('slow');
// }

function testLocalStorage(){
  try{
    localStorage.setItem("foo","foo");
    localStorage.removeItem("foo");
    return true;
  }catch(e){
    return false;
  }
}
function init(){
  if(!testLocalStorage){
    alert("We are sorry but you cannot use localStorage");
  }else{
    console.log("great local storage working");
    localStorage.setItem("whatever","ye");
  }
}
init();

// if(localData){
//   console.log("u have local");
// }else{
//   let localData = [];
// }
// console.log(localData==true);
// Put the object into storage
// localStorage.setItem('localData', JSON.stringify(localData));

// // Retrieve the object from storage
// var retrievedObject = JSON.parse(localStorage.getItem('localData'));

// console.log('retrievedObject: ', retrievedObject);

const taskSubmit = document.querySelector(".editor__submit--task");
const taskDescribe = document.querySelector(".editor__describe--task");

const searchPanel = document.querySelector(".editor__wrapper--search");
const createBtn = document.querySelector(".editor__create");
const createPanel = document.querySelector(".editor__wrapper--category")
const searchInput = document.querySelector(".editor__search");

const list = document.querySelector(".main");
let tasks = document.querySelectorAll(".main__task");
let newTaskDescribe = "";
let btnsDone = document.querySelectorAll(
  "li.main__li button.main__button--done"
);
let btnsDelete = document.querySelectorAll(
  "li.main__li button.main__button--delete"
);
//                                                   fun
// 
// 
// 
// 
// 
// 
function reoladList(){
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


const searchTask = e => {
  const searchText = e.target.value.toLowerCase();

  let activeTasks = [...tasks];

  activeTasks = activeTasks.filter(task =>
    task.textContent.toLowerCase().includes(searchText)
  );
  // hide LIST elements
  tasks.forEach(task => task.parentNode.style.display = "none");
  // show LIST elements
  tasks.forEach((task) => {
    activeTasks.forEach(active => {
      if (task == active) {
        task.parentNode.style.display = "flex";
      }
    });
  });

}

const getTaskDescribe = e => {
  newTaskDescribe = e.target.value;
  console.log(newTaskDescribe);
}

const createTask = (describe) => {
  if (!newTaskDescribe) return alert("Task describe is empty");
  if(newTaskDescribe.length > 30) return alert("Task describe id too long, max 30 characters");
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
  reoladList();
}

const doneTask = e => {
  e.target.parentNode.style.transform = "translate(50%,0)";
  e.target.parentNode.style.backgroundColor = "black";
  // e.target.parentNode.style.textDecoration = "line-through";
  e.target.remove();
};
const deleteTask = e => {
  e.target.parentNode.remove();
};



btnsDone.forEach(item => item.addEventListener("click", doneTask));

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


console.log(tasks);
