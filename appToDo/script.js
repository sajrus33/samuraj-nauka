"use strict";
let canLocalStorage = false;
let taskCharLimit = 50;
let categoryCharLimit = 15;
let categorySelected = false;

let locals = {
  task: {
    txt: [],
    bgc: [],
    color: []
  },
  cat: {
    txt: [],
    bgc: [],
    color: []
  }
}
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

    ////////////////////////////////////////////////////////////////////////////////////////////

    let storagedCategory = JSON.parse(localStorage.getItem("catTxt"));
    let storagedBgc = JSON.parse(localStorage.getItem("catBgc"));
    let storagedFontColor = JSON.parse(localStorage.getItem("catColor"));

    console.log(storagedCategory);
    if (storagedCategory) {
      storagedCategory.forEach((category, i) => {
        console.log(category, storagedCategory[i], storagedBgc[i], storagedFontColor[i]);

        createCategory(storagedCategory[i], storagedBgc[i], storagedFontColor[i], false);
      });
    }

    let storagedTask = JSON.parse(localStorage.getItem("taskTxt"));
    let storagedTaskBgc = JSON.parse(localStorage.getItem("taskBgc"));
    let storagedTaskFontColor = JSON.parse(localStorage.getItem("taskColor"));
    console.log(storagedTask, storagedTaskBgc, storagedTaskFontColor);
    if (storagedTask) {
      storagedTask.forEach((task, i) => {
        createTask(task, storagedTaskBgc[i], storagedTaskFontColor[i], false);
      });
    }

  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
}
//categorys list
const categoryList = document.querySelector(".editor__category");
const categorysWrappper = document.querySelector(".editor__categorys");
let categorys = document.querySelectorAll(".editor__category--option");
let categorysBtn = document.querySelectorAll(".editor__category--button");

function reoladCategorys() {
  categorysBtn = document.querySelectorAll(".editor__category--button");
  [...categorysBtn].forEach(category => {
    category.addEventListener("click", deleteCategory);//delete !!
  });

  categorys = document.querySelectorAll(".editor__category--option");
  [...categorys].forEach(category => {
    category.addEventListener("click", selectCategory);
  });
}

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

let btnsDelete = document.querySelectorAll(
  "button.main__button--delete"
);

function reoladList() {
  tasks = document.querySelectorAll(".main__task");

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
  //style pre brother
  this.previousElementSibling.style.backgroundColor = this.style.backgroundColor;
}
function setSelectFontColor() {
  this.style.backgroundColor = this.options.item(this.selectedIndex).text;
  //style pre pre brother
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
  searchPanel.classList.toggle("displayFlex");
  createPanel.classList.toggle("displayFlex");
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
const selectCategory = e => {
  categorysWrappper.classList.toggle("displayFlex");
  categoryList.style.backgroundColor = e.target.style.backgroundColor;
  categoryList.style.color = e.target.style.color;
  categoryList.innerText = e.target.innerText.replace("delete", "");
  if (!categorySelected) {
    categorySelected = true;
  }
}
const createTask = (describe, bgc, fontColor, create) => {
  if (create) {
    if (!categorySelected) return alert("Pick category!");
    if (!describe) return alert("Task describe is empty");
    if (describe.length > taskCharLimit) return alert("Task describe is too long, max " + taskCharLimit + " characters");
  }

  //li
  const newTask = document.createElement("li");
  newTask.classList.add("main__li");
  newTask.style.backgroundColor = bgc;
  newTask.style.color = fontColor;

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
  newTask.appendChild(newDelete);
  newTask.appendChild(newDescribe);
  list.appendChild(newTask);
  reoladList();

  if (canLocalStorage) {
    locals.task.txt.push(describe);
    locals.task.bgc.push(bgc);
    locals.task.color.push(fontColor);
    localStorage.setItem("taskTxt", JSON.stringify(locals.task.txt));
    localStorage.setItem("taskBgc", JSON.stringify(locals.task.bgc));
    localStorage.setItem("taskColor", JSON.stringify(locals.task.color));
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
  const newButton = document.createElement("button");
  newButton.classList.add("editor__category--button");
  newButton.innerText = "delete";
  newCategory.appendChild(newButton);



  categorysWrappper.appendChild(newCategory);

  reoladCategorys();

  if (canLocalStorage) {
    locals.cat.txt.push(describe);
    locals.cat.bgc.push(bgc);
    locals.cat.color.push(fontColor);
    localStorage.setItem("catTxt", JSON.stringify(locals.cat.txt));
    localStorage.setItem("catBgc", JSON.stringify(locals.cat.bgc));
    localStorage.setItem("catColor", JSON.stringify(locals.cat.color));
  }

}

const deleteCategory = e => {

  const toDelet = locals.cat.txt.indexOf(e.target.parentNode.innerText);

  console.log(toDelet);

  for (let prop in locals.cat) {
    if (locals.cat.hasOwnProperty(prop)) {
      console.log("here is", prop);
      locals.cat[prop].splice(toDelet, 1);
    }
  }

  e.target.parentNode.remove();
  reoladCategorys();

  if (canLocalStorage) {
    localStorage.setItem("catTxt", JSON.stringify(locals.cat.txt));
    localStorage.setItem("catBgc", JSON.stringify(locals.cat.bgc));
    localStorage.setItem("catColor", JSON.stringify(locals.cat.color));
  }
};


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
    categorysWrappper.classList.toggle("displayFlex");
  } else {
    alert("Lets create new category !");
  }
});


const doneTask = e => {
  e.target.parentNode.style.transform = "translate( calc(50% - 2px),0)";
  e.target.parentNode.style.backgroundColor = "black";
  e.target.remove();
};
const deleteTask = e => {

  const toDelet = locals.task.txt.indexOf(e.target.nextElementSibling.innerText);

  console.log(locals.task.length);

  for (let prop in locals.task) {
    if (locals.task.hasOwnProperty(prop)) {
      console.log("here is", prop);
      locals.task[prop].splice(toDelet, 1);
    }
  }

  e.target.parentNode.remove();
  reoladList();

  if (canLocalStorage) {
    localStorage.setItem("taskTxt", JSON.stringify(locals.task.txt));
    localStorage.setItem("taskBgc", JSON.stringify(locals.task.bgc));
    localStorage.setItem("taskColor", JSON.stringify(locals.task.color));
  }
};

btnsDelete.forEach(item => item.addEventListener("click", deleteTask));
searchInput.addEventListener("input", searchTask);


btnCreateCategory.addEventListener("click", toggleMenu);
btnCategoryBack.addEventListener("click", toggleMenu);

btnTaskSubmit.addEventListener("click", function () {
  createTask(taskDescribe.value, categoryList.style.backgroundColor, categoryList.style.color, true);
}, false);

categoryDescribe.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnCategorySubmit.click();
  }
});

taskDescribe.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnTaskSubmit.click();
  }
});

init();
// on click window menu remove class displayBlock 10 - not into it anymore !
//add - button arrow up down on taks 
//add - monsters 8
//add - remove button for categorys 2
//style stylee 9 almost


//style: when select category opens->transformr -100 to 0, and bounce soo: -100 10 -10 0 .
//copyrights by Brian Wala :P fck off cukerberg