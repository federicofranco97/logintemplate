function validateUser(){
    var usr=document.getElementById("loginField").value;
    var pwd=document.getElementById("pwdField").value;
    
    if(usr==="admin" && pwd ==="admin"){
        alert("Login Correcto!");
        window.location.replace('vista.html');
    }else{
        alert("Usuario o contraseña Incorrecta");
    }
    
}

function goBack(){
    window.location.replace('index.html');
}