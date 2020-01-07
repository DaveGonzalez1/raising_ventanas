/*var uno = startup();
var dos = inversionista();
var*/

var uno = document.getElementById('pest1');
uno.addEventListener("click", startup);

var dos = document.getElementById('pest2');
dos.addEventListener("click", inversionista);


function Ingresa() {

    document.getElementById("Ingresar").style.background = "#A937F0";
    document.getElementById("Ingresar").style.opacity = "10";
    document.getElementById("Ingresar").style.margin = " border: #A937F0 1.5px solid";

    function envio() {
        alert("sus datos han sido enviados correctamente");
    }
    envio();
};



function startup() {
    var cambios = document.getElementById("pest1").style;
    cambios.background = "#FFFFFF";
    cambios.border = " #ffffff .1px solid";
    cambios.color = "#A937F0";
    document.getElementById("pest2").style.background = "red";
    document.getElementById("pest2").style.border = " #ffffff .1px solid";
    document.getElementById("pest2").style.color = "#A937F0";

};

function inversionista() {

    document.getElementById("pest2").style.background = "#FFFFFF";
    document.getElementById("pest2").style.border = " #ffffff .1px solid";
    document.getElementById("pest2").style.color = "#A937F0";


};




/*function cambio() {
    if (true) {
        function startup();
    } else {
        document.getElementById("pest1").style.background = "red";
        document.getElementById("pest1").style.border = " #ffffff .1px solid";
        document.getElementById("pest1").style.color = "#A937F0";

    }

}


}
/*

function cambio() {
    if (uno = true) {
        function startup()
    } else {
        document.getElementById("pest1").style.background = "red"
        document.getElementById("pest1").style.border = " #ffffff .1px solid";
        document.getElementById("pest1").style.color = "#A937F0";

    }
}*/

/*function Ingresa() {

    document.getElementById("Ingresar").style.background = "#A937F0";
    document.getElementById("Ingresar").style.opacity = "10";
    document.getElementById("Ingresar").style.margin = " border: #A937F0 1.5px solid";

    function envio() {

    }
    envio();
};


(function(d) {
    let tabs = d.querySelectorAll('.pest1');
    let tabs = d.querySelectorAll('.pest2');
    d.getElementById('form').addEventListener('click', e => {
        alert(e.target);
    })
})(document);


var seleccion=document.getElementsByClassName('pest1');
var seleccion1=document.getElementsByClassName('pest1');

var seleccion=true;
if(seleccion=
    
    )

var seleccion = document.getElementsByClassName('pest1').addEventListener('click', e => {
    console.log("funciona");
})


document.addEventListener("click", function() {
    document.getElementsByClassName('.pest1').console.log("estas aqui")
});

document.addEventListener("click", function() {
            document.getElementById("pest1").innerHTML = "Hello World!";

        }


function startup() {

    document.getElementById("pest1").style.background = "#FFFFFF";
    document.getElementById("pest1").style.border = " #ffffff .1px solid";
    document.getElementById("pest1").style.color = "#A937F0";
    document.getElementById("pest2").style.background = "#A937F0";
    document.getElementById("pest2").style.color = "#FFFFFF";
    document.getElementById("pest2").style.border = " #A937F0 .1px solid";



};

function inversionista() {

    document.getElementById("pest2").style.background = "#FFFFFF";
    document.getElementById("pest2").style.border = " #ffffff .1px solid";
    document.getElementById("pest2").style.color = "#A937F0";
    document.getElementById("pest1").style.background = "#A937F0";
    document.getElementById("pest1").style.border = " #A937F0 .1px solid";
    document.getElementById("pest1").style.color = "#ffffff";
document.addEventListener("click", function() {
    document.getElementById("pest1").style.background = "#A937F0";
    document.getElementById("pest1").style.color = "#FFFFFF";
    document.getElementById("pest1").style.border = "#A937F0 .1px solid";
});

};
inversionista();*/

onst form = document.getElementById('formulario')
const button = document.getElementById('Ingresar')

const email = document.getElementById("email")
const password = document.getElementById("password")

const formIsValid = {
    email: false,
    password: false

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validatoForm();
})

email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
})
password.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.password = true ?
        button.removeAttribute('disabled') :
        button.setAttribute('disabled', true)
    document.getElementById('Ingresar').style.opacity = 1;

})

const validatoForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1) form.onsubmit()
    else alert("form invalido")
}