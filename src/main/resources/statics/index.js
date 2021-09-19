// const URL = "http://localhost:8888/admin"
// const getById = (id) => {
//     return document.getElementById(id)
// }
//
// let code = window.localStorage.getItem("code")
// let logout = document.getElementById("logout_user")
//
// const table = getById("table")
// const formNewUser = getById("form_newuser")
// const newUserName = getById("newuser_name")
// const newUserPassword = getById("newuser_password")
// const newUserEmail = getById("newuser_email")
// const newUserAge = getById("newuser_age")
// const newUserIsRoleAdmin = getById("newuser_is_role_admin")
// const newUserIsRoleUser = getById("newuser_is_role_user")
//
// const editUserName = getById("edituser_name")
// const editUserPassword = getById("edituser_password")
// const editUserEmail = getById("edituser_email")
// const editUserAge = getById("edituser_age")
// const editUserIsRoleAdmin = getById("edituser_is_role_admin")
// const editUserIsRoleUser = getById("edituser_is_role_user")
// const formEditUser = getById("form_edituser")
//
//
//
// const getUserRoles = (roleAdmin,roleUser) => {
//     let roles = []
//     if (roleAdmin.checked) {
//         roles.push({id: 1, role: "ROLE_ADMIN"})
//     }
//     if (roleUser.checked) {
//         roles.push({id:2, role: "ROLE_USER"})
//     }
//     return roles
// }
//
// let checkRole = (roles, role) => {
//     if (roles.length > 1) {
//         if (roles.map(role => role.name).includes(role)){
//             return role
//         }
//     }
//     if (roles[0].name == role) {
//         return role
//     }
// }
//
//
// const handleDelete = (id) => {
//     fetch(URL+"/" + id, {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json',
//             'Access-Control-Allow-Origin': 'no-cors',
//             'Authorization': 'Basic ' + code
//         }
//     })
// }
//
//
// const handleEdit = (userInfo) => {
//     editUserName.value = userInfo.name
//     editUserPassword.value = userInfo.password
//     editUserEmail.value = userInfo.email
//     editUserAge.value = userInfo.age
//     editUserIsRoleAdmin.checked = userInfo.roleAdmin == 'ROLE_ADMIN' ? true : false
//     editUserIsRoleUser.checked = userInfo.roleUser == 'ROLE_USER' ? true : false
//
//
//     formEditUser.addEventListener("submit", (e) => {
//         e.preventDefault()
//         let roles = getUserRoles(editUserIsRoleAdmin, editUserIsRoleUser)
//         let userData = {
//             id: userInfo.id,
//             password: editUserPassword.value,
//             name: editUserName.value,
//             email: editUserEmail.value,
//             age: editUserAge.value,
//             roles: roles
//         }
//
//         fetch(URL, {
//             method: "PUT",
//             headers: {
//                 "Content-type": "application/json;charset=UTF-8",
//                 'Authorization': 'Basic ' + code
//             },
//             body: JSON.stringify(userData)
//         })
//
//         window.location.href="/index.html";
//     })
// }
//
//
// const createUsers = (data) => {
//     return data.map(user => {
//         const tr = document.createElement("tr")
//         // let url = 'http://localhost:8888/new'
//         let roleAdmin = checkRole(user.roles, 'ROLE_ADMIN')
//         let roleUser = checkRole(user.roles, 'ROLE_USER')
//
//         tr.innerHTML =  `
//                 <th>${user.id}</th>
//                 <th>${user.email}</th>
//                 <th>${user.name}</th>
//                 <th>${user.age}</th>
//                 <th>${user.password}</th>
//                 <th><a id="delete" data-userid=${user.id}><i class="bi bi-trash"></i></a></th>
//                 <th><a id="editId"
//                     data-usereditid=${user.id}
//                     data-isroleadmin=${roleAdmin}
//                     data-isroleuser=${roleUser}
//                     data-toggle="modal"
//                     data-target="#modal"
//                 ><i class="bi bi-pencil-square"></i></a></th>
//             `
//         return tr
//     })
// }
//
// fetch(URL, {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json;charset=UTF-8",
//         'Authorization': 'Basic ' + code
//     }
// })
//     .then(resp => resp.json())
//     .then(data => createUsers(data)).then(arr => (
//     arr.map(item => {
//         let editElem = item.querySelector("#editId")
//         let deleteElem = item.querySelector("#delete")
//         let row = editElem.parentNode.parentNode.getElementsByTagName('th')
//         let userId = deleteElem.dataset.userid
//         let roleAdmin = editElem.dataset.isroleadmin
//         let roleUser = editElem.dataset.isroleuser
//         let userInfo = {
//             id: editElem.dataset.usereditid,
//
//             name: row[2].textContent,
//             email: row[1].textContent,
//             age: row[3].textContent,
//             surname: row[4].textContent,
//
//             roleAdmin,
//             roleUser
//         }
//
//         deleteElem.addEventListener("click", (e) => {
//             e.preventDefault()
//             handleDelete(userId)
//             table.removeChild(item)
//         })
//
//         editElem.addEventListener("click", (e) => {
//             e.preventDefault()
//             handleEdit(userInfo)
//         })
//         table.appendChild(item)
//     })))
//
//
// if (formNewUser) {
//     formNewUser.addEventListener("submit", (e) => {
//         e.preventDefault()
//         let roles = getUserRoles(newUserIsRoleAdmin, newUserIsRoleUser)
//         let userData = {
//             name: newUserName.value,
//             password: newUserPassword.value,
//             age: newUserAge.value,
//             email: newUserEmail.value,
//             roles: roles
//         }
//
//
//         fetch(URL, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json;charset=UTF-8",
//                 'Access-Control-Allow-Origin': 'no-cors',
//                 'Authorization': 'Basic ' + code
//             },
//             body: JSON.stringify(userData)
//         })
//
//         window.location.href="/index.html"
//
//     })
//
// }
//
//
//
// if (logout) {
//     logout.addEventListener("click", (e) => {
//         e.preventDefault()
//         window.localStorage.removeItem("code")
//         window.location.href = "/login.html"
//     })
// }