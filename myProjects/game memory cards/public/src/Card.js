export class Card {
    constructor(parent, width, height, imgSrc, imgSrc2, alpha = 1) {
        // CANVAS
        this.canvas = document.createElement("canvas");
        // CTX
        this.ctx = this.canvas.getContext("2d");
        this.ctx.globalAlpha = alpha;

        // OWN PROPERTYS
        this.parent = parent;


        this.img = new Image();
        this.imgSrc = imgSrc;
        this.img2 = new Image();
        this.imgSrc2 = imgSrc2;

        this.load = (src = this.imgSrc, src2 = this.imgSrc2) => {
            // new img?
            this.imgSrc = src;
            this.img.src = src;
            this.imgSrc2 = src2;
            this.img2.src = src2;
        };
        this.check = () => {
            console.log(this.img.src, this.img2.src);

            this.img2.src = this.imgSrc;
            this.img.src = this.imgSrc2;

            const buffor = this.imgSrc;
            this.imgSrc = this.imgSrc2;
            this.imgSrc2 = buffor;
            console.log("checking", this);
            console.log(this.img.src, this.img2.src);
        };
        this.init = () => {
            this.load();
            this.render();
            this.canvas.addEventListener("click", this.check.bind(this));

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
            this.canvas.style.backgroundColor = "transparent";
            this.canvas.style.border = "black 1px solid";

            this.init();

        };

        this.update = () => {
        };
        this.render = () => {

            this.ctx.drawImage(this.img2, 0, 0, this.width, this.height)

            this.update();
            requestAnimationFrame(this.render);
        };

        // console.log(this.canvas);
    }
}