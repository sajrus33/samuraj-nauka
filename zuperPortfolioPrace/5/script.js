const myDOM = {
    // header
    header: document.querySelector(".header"),
    // menu
    menuLang: document.querySelector(".header__nav--languages"),
    menuLangList: document.querySelector(".languages__list"),
    menuHamb: document.querySelector(".header__nav--hamb"),
    menuHambList: document.querySelector(".hamb__list"),
    // products
    productDescribeFirst: document.querySelector(".product__describe--first"),
    productDescribeSecond: document.querySelector(".product__describe--second"),




    listen: function () {
        myDOM.menuLang.addEventListener("click", function () {
            myDOM.menuLangList.classList.toggle("displayNone");
        });
        myDOM.menuHamb.addEventListener("click", function () {
            // if (innerWidth < 680) {
            myDOM.menuHambList.classList.toggle("displayNone");
            // }
        });
        window.addEventListener('scroll', function () {

            if (window.scrollY > (mySize.headerHeight * .75 / 2)) {
                myDOM.productDescribeFirst.style.animation = "goInRight 1s forwards";
            } else {
                myDOM.productDescribeFirst.style.animation = "none";
            }

            if (window.scrollY > (mySize.headerHeight * .75 * 1.5)) {
                myDOM.productDescribeSecond.style.animation = "goInRight 1s forwards";
            } else {
                myDOM.productDescribeSecond.style.animation = "none";
            }

            // const top = describe.previousElementSibling;

            console.log(mySize.headerHeight, mySize.descrbieFirstTop, window.scrollY);
            // if (x > top) 

        });
        window.addEventListener("resize", mySize.resize);

    },

}

let mySize = {
    headerHeight: myDOM.header.offsetHeight,
    descrbieFirstTop: myDOM.productDescribeFirst.offsetTop,

    resize: function () {
        mySize.headerHeight = myDOM.header.offsetHeight;
        mySize.descrbieFirstTop = myDOM.productDescribeFirst.offsetTop,

            console.log("resize");
    }

}

function init() {
    myDOM.listen();
    mySize.resize();
}
init();
