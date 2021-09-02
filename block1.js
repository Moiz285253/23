class Base1 {

        constructor(x, y, width, height) {
          var options = {
            isStatic: true
          };
          this.width = width;
          this.height = height;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options);
          this.image = loadImage("./assets/base1.png")
          World.add(world, this.body);
        }

    display() {

        var pos = this.body.position;
        
        image(this.image ,pos.x ,pos.y ,this.width,this.height)
        
        }

}
