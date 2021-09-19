// let code = window.localStorage.getItem("code")
// let name = document.getElementById("td_name")
// let user_email = document.getElementById("td_email")
// let user_age = document.getElementById("td_age")
// let user_role = document.getElementById("td_role")
// let logout = document.getElementById("logout_user")
//
// window.onload = fetch("http://localhost:8888/user", {
//     method:'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + code
//     }
// })
//     .then((resp) => resp.json())
//     .then(data => {
//         let {name, surname, email, age, role } = data.principal
//         user_name.textContent = name
//         user_email.textContent = email
//         user_age.textContent = age
//         user_role.textContent = role
//     })
//
// logout.addEventListener("click", (e) => {
//     e.preventDefault()
//     window.localStorage.removeItem("code")
//     window.location.href = "/login.html"
// })