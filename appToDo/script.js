"use strict";
let canLocalStorage = false;
let taskCharLimit = 50;
let categoryCharLimit = 15;
function testLocalStorage() {
  try {
    localStorage.setItem("foo", "foo");
    localStorage.removeItem("foo");
    return true;
  } catch (e) {
    return false;
  }
}
function init() {
  if (!testLocalStorage) {
    alert("We are sorry but you cannot use localStorage");
  } else {
    console.log("great local storage working");
    canLocalStorage = testLocalStorage();

    let storagedCategory = JSON.parse(localStorage.getItem("localCategorys"));
    let storagedBgc = JSON.parse(localStorage.getItem("localBgc"));
    let storagedFontColor = JSON.parse(localStorage.getItem("localFontColor"));

    console.log(storagedCategory);
    if (storagedCategory) {
      storagedCategory.forEach((category, i) => {
        console.log(category, storagedCategory[i], storagedBgc[i], storagedFontColor[i]);

        createCategory(storagedCategory[i], storagedBgc[i], storagedFontColor[i], false);
      });
    }

    let storagedTask = JSON.parse(localStorage.getItem("localTasks"));
    let storagedTaskBgc = JSON.parse(localStorage.getItem("localTaskBgc"));
    let storagedTaskFontColor = JSON.parse(localStorage.getItem("localTaskFontColor"));
    console.log(storagedTask);
    if (storagedTask) {
      storagedTask.forEach((task, i) => {
        createTask(task, storagedTaskBgc[i], storagedTaskFontColor[i], false);
      });
    }

  }
}
//categorys list
const categoryList = document.querySelector(".editor__category");
const categorysWrappper = document.querySelector(".editor__categorys");
let categorys = document.querySelectorAll(".editor__category--option");
function reoladCategorys() {
  categorys = document.querySelectorAll(".editor__category--option");
  [...categorys].forEach(category => {
    category.addEventListener("click", selectCategory);
  });
}
categorys = document.querySelectorAll(".editor__category--option");
[...categorys].forEach(category => {
  category.addEventListener("click", selectCategory);
});

//create task
const btnTaskSubmit = document.querySelector(".editor__submit--task");
const taskDescribe = document.querySelector(".editor__describe--task");

//search panel
const searchPanel = document.querySelector(".editor__wrapper--search");
const btnCreateCategory = document.querySelector(".editor__create");
const searchInput = document.querySelector(".editor__search");

//list and tasks
const list = document.querySelector(".main");
let tasks = document.querySelectorAll(".main__task");
let btnsDone = document.querySelectorAll(
  "button.main__button--done"
);
let btnsDelete = document.querySelectorAll(
  "button.main__button--delete"
);

function reoladList() {
  tasks = document.querySelectorAll(".main__task");
  btnsDone = document.querySelectorAll(
    "button.main__button--done"
  );
  btnsDone.forEach(item => item.addEventListener("click", doneTask));
  btnsDelete = document.querySelectorAll(
    "button.main__button--delete"
  );
  btnsDelete.forEach(item =>
    item.addEventListener("click", deleteTask));
}

// new category panel
const createPanel = document.querySelector(".editor__wrapper--category");

//new category
const categoryDescribe = document.querySelector(".editor__describe--category");
const selectCategoryBgc = document.querySelector(".editor__category--bgc");
const selectCategoryFont = document.querySelector(".editor__category--font");
const btnCategorySubmit = document.querySelector(".editor__submit--category")
const btnCategoryBack = document.querySelector(".editor__cancel--category");

function setSelectBgc() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.previousElementSibling.style.backgroundColor = this.style.backgroundColor;
}
function setSelectFontColor() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.previousElementSibling.previousElementSibling.style.color = this.style.backgroundColor;
}
function setSelectBoth() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.style.color = this.style.backgroundColor;
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.style.backgroundColor = this.style.backgroundColor;
}








//                                                   fun
// 
function toggleMenu() {
  searchPanel.classList.toggle("off");
  createPanel.classList.toggle("off");
};

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
const createTask = (describe, bgc, fontColor, create) => {
  if (create) {
    if (!describe) return alert("Task describe is empty");
    if (describe.length > taskCharLimit) return alert("Task describe is too long, max " + taskCharLimit + " characters");
  }

  //li
  const newTask = document.createElement("li");
  newTask.classList.add("main__li");
  newTask.style.backgroundColor = bgc;
  newTask.style.color = fontColor;


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
  //complete 
  newTask.appendChild(newDone);
  newTask.appendChild(newDelete);
  newTask.appendChild(newDescribe);
  list.appendChild(newTask);
  reoladList();

  if (canLocalStorage && create) {
    const localTasks = [];
    const localTaskBgc = [];
    const localTaskFontColor = [];

    [...tasks].forEach(task => {
      localTasks.push(task.innerHTML);
      localTaskBgc.push(task.style.backgroundColor);
      localTaskFontColor.push(task.style.color);
      console.log(task.style.backgroundColor);
    });
    // console.log(localTasks, localTaskBgc, localTaskFontColor);
    localStorage.setItem("localTasks", JSON.stringify(localTasks));
    localStorage.setItem("localTaskBgc", JSON.stringify(localTaskBgc));
    localStorage.setItem("localTaskFontColor", JSON.stringify(localTaskFontColor));


  }
}
const selectCategory = e => {
  console.log(e.target);
  categorysWrappper.classList.toggle("displayBlock");
  categoryList.style.backgroundColor = e.target.style.backgroundColor;
  categoryList.style.color = e.target.style.color;
  categoryList.innerText = e.target.innerText;
  // e.target.style.border = "2px solid white"

}
// localStorage.clear();
const createCategory = (describe, bgc, fontColor, create) => {
  if (create) {
    if (!describe || !bgc || !fontColor) return alert("pick color and name your category");

    if (describe.length > categoryCharLimit) return alert("Category describe is too long, max " + categoryCharLimit + " characters");
  }

  const newCategory = document.createElement("div");
  newCategory.classList.add("editor__category--option");
  newCategory.innerText = describe;
  newCategory.style.backgroundColor = bgc;
  newCategory.style.color = fontColor;
  categorysWrappper.appendChild(newCategory);

  reoladCategorys();

  if (canLocalStorage && create) {
    const localCategorys = [];
    const localBgc = [];
    const localFontColor = [];
    [...categorys].forEach((category) => {
      localCategorys.push(category.innerHTML);
      localBgc.push(category.style.backgroundColor);
      localFontColor.push(category.style.color);

    });

    localStorage.setItem("localCategorys", JSON.stringify(localCategorys));
    localStorage.setItem("localBgc", JSON.stringify(localBgc));
    localStorage.setItem("localFontColor", JSON.stringify(localFontColor));
    console.log(localCategorys, localFontColor, localBgc);
  }

}


// localStorage.clear();

//                                   LISTEN !

selectCategoryBgc.addEventListener("change", setSelectBgc, true);
selectCategoryFont.addEventListener("change", setSelectFontColor, true);
categoryList.addEventListener("change", setSelectBoth);

btnCategorySubmit.addEventListener("click", function () {
  createCategory(categoryDescribe.value, categoryDescribe.style.backgroundColor, categoryDescribe.style.color, true)
});

categoryList.addEventListener("click", function () {
  if (categorys.length) {
    categorysWrappper.classList.toggle("displayBlock");
  } else {
    alert("Lets create new category !");
  }
});


const doneTask = e => {
  e.target.parentNode.style.transform = "translate(50%,0)";
  e.target.parentNode.style.backgroundColor = "black";
  e.target.remove();
};
const deleteTask = e => {
  e.target.parentNode.remove();
  reoladList();

  const localTasks = [];
  [...tasks].forEach(task => {
    localTasks.push(task.innerHTML);
  });
  localStorage.setItem("localTasks", JSON.stringify(localTasks));
};

btnsDone.forEach(item => item.addEventListener("click", doneTask));
btnsDelete.forEach(item => item.addEventListener("click", deleteTask));
searchInput.addEventListener("input", searchTask);


btnCreateCategory.addEventListener("click", toggleMenu);
btnCategoryBack.addEventListener("click", toggleMenu);

btnTaskSubmit.addEventListener("click", function () {
  createTask(taskDescribe.value, categoryList.style.backgroundColor, categoryList.style.color, true);
}, false);

taskDescribe.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnTaskSubmit.click();
  }
});

init();
// on click window menu remove class displayBlock, join off and displayBlock classes into one 10
//add json task style 1
//add button arrow up down on taks 
//add monsters 8
//add remove button for categorys 2
//style stylee 9


//style: when select category opens->transformr -100 to 0, and bounce soo: -100 10 -10 0 .
//copyrights by Brian Wala :P fck off cukerberg