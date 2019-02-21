"use strict";

let canLocalStorage = false;
let taskCharLimit = 50;
let categoryCharLimit = 20;
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
        console.log(storagedCategory[i], storagedBgc[i], storagedFontColor[i]);

        createCategory(storagedCategory[i], storagedBgc[i], storagedFontColor[i], false);
      });
    }

    let storagedTask = JSON.parse(localStorage.getItem("localTasks"));
    console.log(storagedTask);
    if (storagedTask) {
      storagedTask.forEach(task => {
        createTask(task, false);
      });
    }

  }
}
//categorys list
const categoryList = document.querySelector(".editor__category");
let categorys = document.querySelectorAll(".editor__category--option");

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
  categoryDescribe.style.backgroundColor = this.style.backgroundColor;
}
function setSelectFontColor() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  categoryDescribe.style.color = this.style.backgroundColor;
}
function setSelectBoth() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.style.color = this.style.backgroundColor;
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  this.style.backgroundColor = this.style.backgroundColor;
}
selectCategoryBgc.addEventListener("change", setSelectBgc, true);
selectCategoryFont.addEventListener("change", setSelectFontColor, true);
categoryList.addEventListener("change", setSelectBoth);
// categoryList.addEventListener("change", setSelectFontColor);








//                                                   fun
// 

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
const createTask = (describe, create, ) => {
  if (create) {
    if (!describe) return alert("Task describe is empty");
    if (describe.length > taskCharLimit) return alert("Task describe is too long, max " + taskCharLimit + " characters");
  }

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
  //complete 
  newTask.appendChild(newDone);
  newTask.appendChild(newDelete);
  newTask.appendChild(newDescribe);
  list.appendChild(newTask);
  reoladList();

  // console.log([...tasks]);

  // console.log(localTasks);

  if (canLocalStorage && create) {
    const localTasks = [];
    [...tasks].forEach(task => {
      localTasks.push(task.innerHTML);
    });
    localStorage.setItem("localTasks", JSON.stringify(localTasks));

  }

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
  categoryList.appendChild(newCategory);

  categorys = document.querySelectorAll(".editor__category--option");

  if (canLocalStorage && create) {
    const localCategorys = [];
    const localBgc = [];
    const localFontColor = [];
    [...categorys].forEach((category, i) => {
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

btnCategorySubmit.addEventListener("click", function () {
  createCategory(categoryDescribe.value, categoryDescribe.style.backgroundColor, categoryDescribe.style.color, true)
});

categoryList.addEventListener("click", function () {
  [...categorys].forEach(category => {
    category.classList.toggle("displayBlock");
  })
});
[...categorys].forEach(category => {
  category.addEventListener("click", function () {
    console.log("yup")
  });
});
const doneTask = e => {
  e.target.parentNode.style.transform = "translate(50%,0)";
  e.target.parentNode.style.backgroundColor = "black";
  // e.target.parentNode.style.textDecoration = "line-through";
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

btnCreateCategory.addEventListener("click", function () {
  searchPanel.classList.toggle("off");
  createPanel.classList.toggle("off");
}, false);
btnCategoryBack.addEventListener("click", function () {
  searchPanel.classList.toggle("off");
  createPanel.classList.toggle("off");
});

btnTaskSubmit.addEventListener("click", function () {
  createTask(taskDescribe.value, true);
}, false);

taskDescribe.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnTaskSubmit.click();
  }
});

init();
