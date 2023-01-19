let h1 = document.querySelector("h1");
let number = h1.innerHTML;
let arttir = document.getElementById("arttir");
let azalt = document.getElementById("azalt");

arttir.addEventListener("click",function(){

	number++;
	h1.innerHTML = number;

});

azalt.addEventListener("click",function(){

number--;
h1.innerHTML = number;

});