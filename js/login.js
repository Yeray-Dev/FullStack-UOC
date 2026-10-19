import { users } from "./datos.js"


const btnEnter = document.getElementById("btn-enter")

btnEnter.addEventListener("click", () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const user = users.find(u => u.email === email && u.password === password)

    if(user){
        console.log("Hola")
        window.location.href = '../src/dashboard.html'
        return
    }
    console.log("Bye")
})