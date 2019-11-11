function eleccion() {
    document.getElementById("pest2").style.background = "#FFFFFF";
    document.getElementById("pest2").style.color = "#A937F0";
    document.getElementById("pest2").style.border = "#FFFFFF .0px solid";
    document.getElementById("pest1").style.background = "#A937F0";
    document.getElementById("pest1").style.color = "#FFFFFF";


}

function eleccion1() {
    document.getElementById("pest1").style.background = "#FFFFFF";
    document.getElementById("pest1").style.color = "#A937F0";
    document.getElementById("pest1").style.border = "#FFFFFF .0px solid";
    document.getElementById("pest2").style.background = "#A937F0";
    document.getElementById("pest2").style.color = "#FFFFFF";


}
//document.getElementById("Ingresar").addEventListener("click", Ingresa);

function Ingresa() {
    var correo = document.getElementById('email').value;
    if (correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
        alert('Por favor llena esccribe tu correo');
        document.getElementById("email").focus();
        return false;
    } else {
        var password = document.getElementById('password').value;
        if (password == null || password.length == 0 || /^\s+$/.test(password)) {
            alert('Por favor llena esccribe tu contraseña');
            document.getElementById("password").focus();

            return false;

        } else(password == true)
        return document.getElementById("Ingresar").style.opacity = 1;


        //correo.innerHTML = ""
        //password.innerHTML = ""



    }
}