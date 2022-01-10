let username = document.querySelector("#username")
let labelusername = document.querySelector("#labelusername")
let validusername = false

let password = document.querySelector("#password")
let labelpassword = document.querySelector("#labelpassword")
let validpassword = false

let passwordconfirm = document.querySelector("#passwordconfirm")
let labelpasswordconfirm = document.querySelector("#labelpasswordconfirm")
let validpasswordconfirm = false

let msgError = document.querySelector("#msgError")
let msgSucess = document.querySelector("#msgSucess")
        
username.addEventListener("keyup", () => {
    if(username.value.length <= 2){
        labelusername.setAttribute("style", "color: red")
        labelusername.innerHTML = "<strong>Name *Input at least 3 characters</strong>"
        validusername = false
    } else {
        labelusername.setAttribute("style", "color: #F0F0F0")
        labelusername.innerHTML = "Name"
        validusername = true
    }
})

password.addEventListener("keyup", () => {
    if(password.value.length <= 5){
        labelpassword.setAttribute("style", "color: red")
        labelpassword.innerHTML = "<strong>Needs 6 characters or more</strong>"
        validpassword = false
    } else {
        labelpassword.setAttribute("style", "color: #F0F0F0")
        labelpassword.innerHTML = "Password"
        validpassword = true
    }
})

passwordconfirm.addEventListener("keyup", () => {
    if(password.value != passwordconfirm.value){
        labelpasswordconfirm.setAttribute("style", "color: red")
        labelpasswordconfirm.innerHTML = "<strong>Passwords do not match</strong>"
        validpasswordconfirm = false
    } else {
        labelpasswordconfirm.setAttribute("style", "color: #F0F0F0")
        labelpasswordconfirm.innerHTML = "Confirm Password"
        validpasswordconfirm = true
    }
})
function cadastrar(){
    if(validusername && validpassword && validpasswordconfirm) {
        let listUser = JSON.parse(localStorage.getItem("listUser") || "[]")

        listUser.push(
        {
            usernameCad: username.value,
            passwordCad: password.value,
        }
        )

        localStorage.setItem("listUser", JSON.stringify(listUser))
        
        
        msgSucess.setAttribute("style", "display: block")
        msgSucess.innerHTML = "<strong>Registered successfully!</strong>"
        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""

        setTimeout(()=>{
            window.location.href="login.html"
        }, 2000)
    } else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "<strong>Complete all requirements correctly before registering</strong>"
        msgSucess.innerHTML = ""
        msgSucess.setAttribute("style", "display: none")
    }
}