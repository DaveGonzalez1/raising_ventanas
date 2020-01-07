var txtNombre = document.getElementById('nombre').value;

/*function Ingresa() {
    if (document.fvalida.email.value.length == 0) {
        alert("ingresa tu correo")
        document.fvalida.email.focus()
        return false;
    } else {
        if (document.fvalida.password.value.length == 0) {
            alert("ingresa tu correo")
            document.fvalida.password.focus()
            return 0;
        }
    }
}
document.getElementById("email").removeAttribute('disabled')


password.setAttibute('disabled', true);
document.getElementById("Ingresar").style.opacity = 1;
}*/

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
        }



        function enviar() {
            if (correo == true || password == true) {

            }
        }


    }


}

ar formulario = document.getElementById('validacion');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("ne diste un click");

    var datos = new FormData(formulario);
    console.log(datos.get('email'))
    console.log(datos.get('password'))
})

function enviar() {
    if (correo == true || password == true) {
        document.getElementById('Ingresar').style.opacity = 1
    }
    alert("Se han enviado tus datos");
}

}

const validar = Ingresa()
if (validar == true) {

    document.getElementById('Ingresar').style.opacity = 1
}
alert("Se han enviado tus datos");
}

if (email == true || password == true) {
    validar();
    document.getElementById("Ingresar").style.opacity = 1;

} else {
    alert("llena tus datos");
}

//document.getElementById("Ingresar").addEventListener("click", Ingresa);
/*
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
}*/