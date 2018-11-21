function Point() {
	this.y = width/2;
	this.x = heigth/2;

	this.velocity = 1;

	this.show = function()
	{
		fill(255);
		ellipse(this.x, this.y, 50, 50);
	}

	this.update = function()
	{
		this.y += this.velocity
		this.x += this.velocity
	}
}