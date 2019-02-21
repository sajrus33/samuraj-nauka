
const MyLib = {
  time: {
    howMuchLeft: function (arg, since, untill) {
      // return number = how long that's gonna take
      // const myTime = new Date().getTime();
      switch (arg) {
        case "hours":
          return Math.floor(
            (untill / (1000 * 60 * 60) - since / (1000 * 60 * 60)) % 24
          );
        case "days":
          return Math.floor(
            untill / (1000 * 60 * 60 * 24) - since / (1000 * 60 * 60 * 24)
          );
        case "minutes":
          return Math.floor((untill / (1000 * 60) - since / (1000 * 60)) % 60);
        case "seconds":
          return Math.floor((untill / 1000 - since / 1000) % 60);
        default:
          console.log(
            "First argument value can be only : hours, days, minutes, seconds"
          );
          return "Wrong first argument";
      }
    }
  },
  game: {
    //rect obj
    rectangle: function (width = 32, height = 32, fillStyle = "red", strokeStyle = "none", lineWidth = 0, x = 0, y = 0) {
      let o = { width, height, fillStyle, strokeStyle, lineWidth, x, y }
      //optional : rotation,vx,vy,alpha, visible, scaleX, scaleY
      o.render = ctx => {
        ctx.strokeStyle = o.strokeStyle;
        ctx.lineWidth = o.lineWidth;
        ctx.beginPath();
        ctx.rect(-o.width / 2, -o.height / 2, o.width, o.height);
        if (o.strokeStyle) {
          ctx.stroke();
        }
        ctx.fill();
      };
      //global children array
      children.push(o);
      return o;
    },
    //render function 
    render: function (canvas, ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //global children array
      children.forEach(sprite => {
        //aybe this. cause now it sin obj not like in book "global"
        displaySprite(sprite);
      });
    },
    displaySprite: function (sprite) {
      //we have vissible only in optional
      if (sprite.visible) {
        ctx.save();
        ctx.translate(sprite.x + sprite.width / 2, sprite.y + sprite.height / 2);
        ctx.rotate(sprite.rotation);
        ctx.globalAlpha = sprite.alpha;
        ctx.scale(sprite.scaleX, sprite.scaleY);
        //thats a sprite render method , look up rectangle
        sprite.render(ctx);
        ctx.restore();

      }
    },
    //nestable rectangle sprites
    nestRectangle: function (width = 32, height = 32, fillStyle = "red", strokeStyle = "none", lineWidth = 0, x = 0, y = 0) {
      let o = { width, height, fillStyle, strokeStyle, lineWidth, x, y }
      o._layer = 0;
      //optional : rotation,vx,vy,alpha, visible, scaleX, scaleY
      o.children = [];
      o.parent = undefined;
      o.addChild = sprite => {
        if (sprite.parent) {
          sprite.parent.removeChild(sprite);
        }
        sprite.parent = o;
        o.children.push(sprite);
      };
      o.removeChild = sprite => {
        if (sprite.parent === o) {
          o.children.splice(o.children.indexOf(sprite), 1)
        } else {
          throw new Error(sprite + " is not a child of " + o);
        }
      };
      o.render = ctx => {
        ctx.strokeStyle = o.strokeStyle;
        ctx.lineWidth = o.lineWidth;
        ctx.fillStyle = o.fillStyle;
        ctx.beginPath();
        ctx.rect(-o.width / 2, -o.height / 2, o.width, o.height);
        if (o.strokeStyle) {
          ctx.stroke();
        }
        ctx.fill();
      }

    }

  }
};

