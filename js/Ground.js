class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(width/2,height-20,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,100,100);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,9000,20);
    }
}