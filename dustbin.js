class dustbin
{
	constructor(x,y,w,h,r)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		// this.wallThickness=20;
		this.angle=0;

		this.body=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.image = loadImage("sprites/dustbin.png");
		World.add(world, this.body);
		// this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		// Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		// this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		// Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		// World.add(world, this.bottomBody);
		// World.add(world, this.leftWallBody);
		

	}
	display()
	{
			push();
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			imageMode(CENTER)
			// angleMode(RADIANS);
			image(0,0,this.width, this.height);
			pop();
			
	}

}

