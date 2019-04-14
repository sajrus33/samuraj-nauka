export class Table {
    constructor(parent = document.body, width, height, alpha = 1) {
        // DIV
        this.div = document.createElement("div");
        this.div.style.width = width;
        this.div.style.height = height;
        this.div.style.position = "relative";
        // CANVAS
        this.canvas = document.createElement("canvas");
        this.canvas.style.height = "100%";
        this.canvas.style.width = "100%";
        this.canvas.style.position = "absolute";
        this.canvas.style.backgroundColor = "black";
        this.canvas.style.border = "green 2px solid";
        // CTX
        this.ctx = this.canvas.getContext("2d");
        this.ctx.globalAlpha = alpha;

        // OWN PROPERTYS
        this.parent = parent;
        this.appendTo = (parent = this.parent) => {
            // new parent?
            this.parent = parent;
            // append with div
            this.parent.appendChild(this.div);
            this.div.appendChild(this.canvas);
        };
        console.log(this.canvas);
    }
}