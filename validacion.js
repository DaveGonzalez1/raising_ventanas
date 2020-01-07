function validar() {


    var email = document.getElementById("email").addEventListener('keyup', function(e) {

        var filtro = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        //var correo = document.getElementById('email').value;

        if (!filtro.test(email.value)) {
            alert("escribe una direccion de correo electronico valido");
            email.focus();
            return false;
        }
    })

    var password = document.getElementById("password").addEventListener('keyup', function(e) {

        if (password.value == "" || password.length == 0 || /^\s+$/.test(password)) {
            alert('Por favor escribe tu contraseña');
            password.focus();

            return false;
        } else {
            document.getElementById("Ingresar").style.opacity = 1;
        }
    })


}





document.getElementById("Ingresar").addEventListener('click', function(e) {
    validar();
    alert('se han nviado sus datos');
    limpiar();

}, true);


function limpiar() {
    form.reset();
    return true;

}


function disabilitado() {
    if (email === true && this.password == true) {

    }
}