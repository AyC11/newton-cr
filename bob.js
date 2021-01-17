class Bob
{
	constructor(x,y,color)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			frictionAir:0.0,
			slop:1,
			inertia:Infinity
			
			}
		this.x=x;
		this.y=y;
		this.color=color
		this.body=Bodies.rectangle(this.x, this.y,40,40, options)
		World.add(world, this.body);

	}
	display()
	{
			var angle=this.body.angle
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
		rotate(angle)
			rectMode(CENTER)
			noStroke();
			fill(this.color)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,60,60);
			pop()
			
	}

}