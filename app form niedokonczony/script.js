//dowolna ilsoc argumentow
const addAllNumbers = function() {
    let result = 0;
    for(let i = 0; i<arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// console.log(addAllNumbers(20,50,60));

//
function showInfoAboutUser(age,name,sex) {
    if(arguments.length === 0) {
        console.log(`nic o tobie nie wiem`);
    }else if(arguments.length === 1){
        console.log(`Masz ` + age + ` lat. Nic więcej nie wiem`);
    }else if(arguments.length === 2){
        console.log(`Masz na imię ${name} i masz ${age} lat`);
    }else{
        console.log(`Masz ${age} lat. Imię ${name}. Jesteś ${sex}`);
    }
}
function checkForm() {
    document.getElementById('.radioMale').checked = 
}
showInfoAboutUser("14","Brian");