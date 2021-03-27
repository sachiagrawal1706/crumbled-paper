class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,density:1.2		
			}
		this.x=x;
		this.y=y;
		this.radius=radius
        this.image=loadImage('paper.png')
		this.body=Bodies.circle(x, y, radius/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.radius, this.radius);
			pop()
			
	}

}