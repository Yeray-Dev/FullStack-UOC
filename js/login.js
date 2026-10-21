import { users } from "./datos.js"


const buttonEye = document.getElementById('toggle-password')
const input = document.getElementById('password')
const icon = document.getElementById('eye-icon')
const btnEnter = document.getElementById("btn-enter")
const inputEmail = document.getElementById("email")
const inputPass = document.getElementById("password")


buttonEye.addEventListener('click', () => {
	const visible = input.type === 'text'
	input.type = visible ? 'password' : 'text'
	icon.classList.toggle('bi-eye', visible)
	icon.classList.toggle('bi-eye-slash', !visible)
	buttonEye.setAttribute('aria-label', visible ? 'Show password' : 'Hidden password')
})

btnEnter.addEventListener("click", () => {
	const email = document.getElementById("email").value
	const password = document.getElementById("password").value
	const user = users.find(u => u.email === email && u.password === password)

	if (user) {
		console.log("Hola")
		window.location.href = "../src/dashboard.html"
		return
	}
	const emailExists = users.some(u => u.email === email)
	if (!emailExists) {
		inputEmail.classList.add("is-invalid")
	}

	inputPass.classList.add("is-invalid")
})
