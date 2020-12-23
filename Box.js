class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            friction:0.8,
            density:0.1,
            restitution:0.8,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.image=loadImage('sprites/buildingblock.png');
        World.add(myWorld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        //console.log(building_color);
        //fill(building_color);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        //rect(0,0,this.w,this.h);
        pop();
    }
}