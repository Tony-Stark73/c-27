class Sling{
    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.1,
        length:1
    }
   this.sling= Constraint.create(options);
    World.add(world,this.sling);
}

display(){
  

    strokeWeight(4)
    line (  this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
}


}