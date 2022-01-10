function enter(){
    let username = document.querySelector('#username')
    let usernameLabel = document.querySelector('#usernameLabel')
    
    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')
    
    let msgError = document.querySelector('#msgError')
    let listUser = []
    
    let userValid = {
      username: '',
      password: ''
    }
    
    listUser = JSON.parse(localStorage.getItem('listUser'))
    
    listUser.forEach((item) => {
      if(username.value == item.usernameCad && password.value == item.passwordCad){
         
        userValid = {
           username: item.usernameCad,
           password: item.passwordCad
         }
        
      }
    })

    if(username.value == userValid.username && password.value ==userValid.password){
        window.location.href = "index.html"

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem("token", token)

        localStorage.setItem("userLogin", JSON.stringify(userValid))

    } else {
        usernameLabel.setAttribute("style", "color: red")
        passwordLabel.setAttribute("style", "color: red")
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "Usuário ou senha incorretos"
        username.focus()
    }
}