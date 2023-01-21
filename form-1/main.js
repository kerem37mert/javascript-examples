let loginDom = document.querySelector("#dogin");
let alertDom = document.querySelector("#alert");

login.addEventListener("click", formHandler);

function formHandler(event)
{
	event.preventDefault();

	let email = document.querySelector("#email");
	let password = document.querySelector("#password");

	if(email.value && password.value)
	{
		localStorage.setItem("email",email.value);
		localStorage.setItem("password",password.value);

		email.value = "";
		password.value = "";
	}
	else
	{
		alertDom.innerHTML = "Eksik bilgi girdiniz";
	}
}