const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Masz zajebiście silne hasło";
		p.style.color = "gold";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Masz  silne hasło";
		p.style.color = "lime";
	} else if (pass.value.length > minValue && pass.value.match(letters)) {
		p.textContent = "Masz średnie hasło";
		p.style.color = "blue";
	} else {
		p.textContent = "Masz lipne hasło";
		p.style.color = "red";
	}
};

const checkPassword = () => {
	if (pass.value !== "") {
		showMsg();
	} else {
		p.textContent = "gdzie to hasło??";
		p.style.color = "";
	}
};

pass.addEventListener("keyup", checkPassword);
// pass.addEventListener("keyup", showMsg);
