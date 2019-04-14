export class Card {
    constructor(parent, width, height, imgSrc, alpha = 1) {
        // CANVAS
        this.canvas = document.createElement("canvas");
        // CTX
        this.ctx = this.canvas.getContext("2d");
        this.ctx.globalAlpha = alpha;

        // OWN PROPERTYS
        this.parent = parent;


        this.img = new Image();
        this.imgSrc = imgSrc;

        this.load = (src = this.imgSrc) => {
            // new img?
            this.imgSrc = src;
            this.img.src = src;
        };
        this.init = () => {
            this.load();

        };
        this.appendTo = (parent = this.parent) => {
            // new parent?
            this.parent = parent;
            // append
            this.parent.appendChild(this.canvas);
            // get higher z-index 
            this.canvas.style.zIndex = this.parent.style.zIndex + 1;
            // default style
            this.canvas.style.height = height;
            this.canvas.style.width = width;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.canvas.style.backgroundColor = "green";
            this.canvas.style.border = "black 1px solid";
            this.init();

        };

        this.update = () => {
        };
        this.render = () => {

            this.ctx.drawImage(this.img, 0, 0, this.width, this.height)

            this.update();
            requestAnimationFrame(this.render);
        };

        console.log(this.canvas);
    }
}