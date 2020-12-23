class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:300,
            stiffness:1.2,
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        this.image=loadImage('sprites/chain.png');
        World.add(myWorld,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB;
            push();
            stroke(48,22,8);
            strokeWeight(8);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            //imageMode(CENTER);
            rotate(this.rope.bodyA.angle);
            //console.log(this.rope);
            //image(this.image,pointB.x-20,pointB.y);
            pop();
        }
    }

}