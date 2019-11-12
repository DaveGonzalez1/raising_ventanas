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


function validar() {
    var filtro = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    //var correo = document.getElementById('email').value;

    if (!filtro.test(email.value)) {
        alert("escribe una direccion de correo electronico valido");
        email.focus();
        return false;
    } else if (password.value == "" || password.length == 0 || /^\s+$/.test(password)) {

        alert('Por favor escribe tu contraseña');

        password.focus();

        return false;
    } else {

        document.getElementById("Ingresar").style.opacity = 1;

        return true;



    }

}




document.getElementById("Ingresar").addEventListener('click', function(e) {
    if (validar() == true) {
        alert('se han nviado sus datos');
        limpiar();
    }
}, true);


function limpiar() {
    form.reset();
    return true;

}