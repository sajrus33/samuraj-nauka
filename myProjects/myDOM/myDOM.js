"use strict";
window.onload = app;
function app() {
    const myDOM = {
        hamburger: {
            ico: document.querySelector(".hamburger"),
            bar1: document.querySelector(".bar--first"),
            bar2: document.querySelector(".bar--second"),
            bar3: document.querySelector(".bar--thirt"),
            // list: document.querySelector("hamburger__list")
        },
        arrow: document.querySelector(".arrow"),
        // startPoint: document.querySelector(".firstElement that arrow will target"),


        scrollTo: function (target = "DOM element you want to target", duration = 200) {
            console.log({ target });
            const targetPosition = target.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            let startTime = null;
            function ease(time, start, distance, duration) {
                time /= duration / 2;
                if (time < 1) return distance / 2 * time * time + start;
                time--;
                return -distance / 2 * (time * (time - 2) - 1) + start;
            }

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const newPosition = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, newPosition);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            requestAnimationFrame(animation)
        },


        listen: function () {
            // hamburger ico menu "on click"
            myDOM.hamburger.ico.addEventListener("click", function () {
                // hamburger ico change  ||| -> X
                myDOM.hamburger.bar1.classList.toggle("bar--firstA");
                myDOM.hamburger.bar2.classList.toggle("bar--secondA");
                myDOM.hamburger.bar3.classList.toggle("bar--thirtA");
                // display mobile nav
                // myDOM.list.classList.toggle("flex");

            });
            // myDOM.arrow.addEventListener("click", function () {
            //     const scrollTime = Math.abs(window.pageYOffset / 3);
            //     console.log({ scrollTime },"if = 0, propably not good startPoint");
            //     myDOM.scrollTo(myDOM.startPoint, scrollTime);
            // });

        }



    };

    function init() {
        myDOM.listen();
    }
    init();
}


// window.addEventListener("resize", function () {
//     console.log("header.offSetBottom");

//     console.log(myDOM.about.offsetTop);
//     console.log(myDOM.header.offsetHeight);

// });



