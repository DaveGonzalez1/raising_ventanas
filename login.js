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


};