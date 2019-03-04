const myDOM = {
    menuLang: document.querySelector(".header__nav--languages"),
    menuLangList: document.querySelector(".languages__list"),
    menuHamb: document.querySelector(".header__nav--hamb"),
    menuHambList: document.querySelector(".hamb__list"),

    listen: function () {
        myDOM.menuLang.addEventListener("click", function () {
            myDOM.menuLangList.classList.toggle("displayNone");
        });
        myDOM.menuHamb.addEventListener("click", function () {
            myDOM.menuHambList.classList.toggle("displayNone");
        });

    }
}

myDOM.listen();