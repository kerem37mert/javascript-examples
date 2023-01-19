let number = 10;
localStorage.setItem("number",number);
let h1 = document.querySelector("h1");
h1.innerHTML = localStorage.getItem("number");
let arttir = document.getElementById("arttir");
let azalt = document.getElementById("azalt");

arttir.addEventListener("click",function(){

	number++;
	h1.innerHTML = number;
	localStorage.setItem("number",number);

});

azalt.addEventListener("click",function(){

	number--;
	h1.innerHTML = number;
	localStorage.setItem("number",number);
});