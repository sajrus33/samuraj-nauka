export class Statistics {
    constructor(parent = document.body, width, height, imgSrc, alpha = 1) {
        //      CANVAS
        this.canvas = document.createElement("canvas");
        this.canvas.style.height = height;
        this.canvas.style.width = width;
        this.canvas.style.position = "absolute";
        this.canvas.style.top = "0%";
        //      CTX
        this.ctx = this.canvas.getContext("2d");
        this.ctx.globalAlpha = alpha;


        //      OWN PROPERTYS
        this.parent = parent;

        this.img = new Image();
        this.imgSrc = imgSrc;

        this.load = (src = this.imgSrc) => {
            // new img?
            this.imgSrc = src;
            this.img.src = src;
        };

        // appendTo()
        this.appendTo = (parent = this.parent) => {
            // new parent?
            this.parent = parent;
            // append with div
            this.parent.appendChild(this.canvas);
            // append statistic menu


            // CTX display table background
            this.load();
            this.render();

        };
        this.update = () => {
        };
        this.render = () => {

            this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);


            this.update();
            requestAnimationFrame(this.render);
        };



        console.log(this.canvas);
    }
}