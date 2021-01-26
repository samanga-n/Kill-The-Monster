class Thread{
	constructor(bodyA,pointB)
	{
		
		var options={ 
            bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:2, 
			length:150
			
		}
		
		//this.bodyA=bodyA;
		
        this.throw=Constraint.create(options);
        this.pointB=pointB;
		World.add(world,this.throw)
	}

	attach(body){
		this.throw.bodyA=body;
	}

	fly()
	{
        this.throw.bodyA=null;
        // strokeWeight(0);
	}

	display()
	{
		if(this.throw.bodyA)
		{
			var pointA=this.throw.bodyA.position;
			var pointB=this.pointB

            strokeWeight(0);
            stroke('white');		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}