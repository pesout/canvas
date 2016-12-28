var cnv = document.getElementById("cnv"); //Canvas choosing
var context = cnv.getContext("2d"); //Context declaration

function deg_rad(x) //From degrees to radians
{
	return x*(Math.PI/180) //Because π radians = 180 degrees
}

function draw(n, r_obj, r_circ)
{
	n = Math.abs(Math.round(n)); //Script don't accept negative and not rounded values
	r_obj = Math.abs(Math.round(r_obj));
	r_circ = Math.abs(Math.round(r_circ));

	alpha = 360/n; //One angle size
	n = alpha; //Because of the cicle below

	while (alpha <= 360) //If alpha id smaller then 360 degrees
	{
			var beta = 180 - (90 + alpha); //In a triangle, if we know 2 angles, we can count the size of the third one

			var x = r_circ * Math.sin(deg_rad(beta)) + 300;
			var y = r_circ * Math.sin(deg_rad(alpha)) + 300;
				//Size of the triangles; +300 means shift (to make it visible)

			context.beginPath(); //Drawing starts
				context.arc(x,y,r_obj,0,2*Math.PI);
					//x, y - center position; r_obj - radius of the main circle; 0, 2*Math.PI - means, that we draw the whole circle
			context.stroke(); //Drawing ends
			alpha = alpha + n; //Next angle - cycle continues
	}
}



function del()
{
	context.clearRect(0, 0, cnv.width, cnv.height); //White rectangle over canvas
}
