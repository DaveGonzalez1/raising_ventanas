import React from 'react';
import '../assets/styles/components/body.scss'


const Body = () => (

    <body>
    <div class="contenedor">
        <div class="base-contenido">
            <p class="contenido-circulo1">
                <font face="arial"  size="7"><b id="cantidad">$1,000,000</b></font>
            </p>
            <p class="contenido-circulo2">
                <p class="contenido-posicion">
                    <font face="arial"  size="6.5">
                        <center><b id="lugar">6to</b></center>
                    </font>
                </p>
            </p>


            <font face="arial"  size="5"><b><h1>ADICOM</h1></b></font>

            <button class="boton-estadisticas"></button>
            <button class="boton-lista"></button>
        </div>
    </div>

</body>


);

export default Body;