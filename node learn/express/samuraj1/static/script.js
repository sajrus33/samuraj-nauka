const name = "Jakaś osoba"
const url = "http://localhost:3000/?name=" + encodeURIComponent(name);

const a = document.createElement("a");
a.setAttribute("href", url);
a.innerHTML = "klikajta";
document.body.appendChild(a);