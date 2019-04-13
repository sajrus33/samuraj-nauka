export class Card {
    constructor(parent, width, height, alpha = 1) {
        // CANVAS
        this.canvas = document.createElement("canvas");
        // CTX
        this.ctx = this.canvas.getContext("2d");
        this.ctx.globalAlpha = alpha;

        // OWN PROPERTYS
        this.parent = parent;
        this.img = new Image();

        this.load = (src) => {

        };

        this.appendTo = () => {
            // append
            this.parent.appendChild(this.canvas);
            // get higher z-index 
            this.canvas.style.zIndex = this.parent.style.zIndex + 1;
            // default style
            this.canvas.style.height = height;
            this.canvas.style.width = width;
            this.canvas.style.backgroundColor = "red";
            this.canvas.style.border = "black 1px solid";
        };
        this.update = () => {

        };
        this.render = () => {


            this.update();
            requestAnimationFrame(this.render)
        };

        console.log(this.canvas);
    }
}