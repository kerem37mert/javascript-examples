// JavaScript Document

let boxDom = document.querySelector("#box");


// Default
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "red";


function colorChange()
{
	let colorDom = document.getElementById("color");
	boxDom.style.backgroundColor = colorDom.value;
}

function widthChange()
{
	let widthDom = document.getElementById("width");
	boxDom.style.width = widthDom.value + "px";
}


function heightChange()
{
	let heightDom = document.getElementById("height");
	boxDom.style.height = heightDom.value + "px";
}