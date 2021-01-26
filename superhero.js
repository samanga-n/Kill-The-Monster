class Hero {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("images/Superhero-01.png")
        this.body=Bodies.circle(x,y,r,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);      
        fill(204, 102, 153);
        image(this.image,0,0,this.r,this.r); // if in ellipseMode(CENTER), either change this.r given here
        pop();                      // to this.r*2 OR   in 12th line change it to r/2
    }
}