let konum = "left";
let buton = document.getElementById("buton");

buton.addEventListener("mouseover",myfun);

function myfun()
{

	if(konum == "right")
	{
		buton.style.float = "left";
		konum = "left";
	}
	else if(konum == "left")
	{
		buton.style.float = "right";
		konum = "right";
	}
}