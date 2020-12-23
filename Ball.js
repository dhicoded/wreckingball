class Ball{
    constructor(x,y,w,h,a){
        var options={
            density:1,
            frictionAir:0.005,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.image=loadImage('sprites/ball.png')
        World.add(myWorld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        //ellipseMode(RADIUS);
        fill('blue');
        //ellipse(0,0,this.w,this.h);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}