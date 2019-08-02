"use strict";
const app = () => {
    console.log("myDOM loaded");
    const myDOM = {
        node: {
            hamburger: {
                wrapper: document.querySelector(".hamburger"),
                bar1: document.querySelector(".bar--first"),
                bar2: document.querySelector(".bar--second"),
                bar3: document.querySelector(".bar--thirt"),
                // list: document.querySelector("hamburger__list")
            },
            arrow: document.querySelector(".arrow"),
        },

        listeners: {
            hamburger: () => {
                // hamburger ico menu "on click"
                myDOM.node.hamburger.wrapper.addEventListener("click", () => {
                    // hamburger ico change  ||| -> X
                    myDOM.node.hamburger.bar1.classList.toggle("bar--firstA");
                    myDOM.node.hamburger.bar2.classList.toggle("bar--secondA");
                    myDOM.node.hamburger.bar3.classList.toggle("bar--thirtA");
                    // display mobile nav
                    // myDOM.list.classList.toggle("flex");

                });
            },


        },
        listen: () => {
            Object.keys(myDOM.listeners).forEach(listener => {
                myDOM.listeners[listener]();
            });
        }


    };

    const init = () => {
        myDOM.listen();
    }
    init();
}


window.addEventListener("load", app);


