document.body.appendChild(document.createElement("div"));
document.querySelector("div").style.backgroundColor = "red";

const setStyle = (styles, element) => {
    Object.assign(element.style, styles);
}