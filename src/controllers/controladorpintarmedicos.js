import {consultarMedico} from '../../services/consultaMedicos.js'

console.log("es mi ultima clase")

let fila = document.getElementById("fila")

consultarMedico().then(function(respuesta){
    respuesta.datos.forEach(function(medico){
        console.log(medico)

        let columna = document.createElement("div")
        columna.classList.add("col")//html

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")//html

        let foto = document.createElement("img")
        foto.src = medico.fotografia//html
        foto.classList.add("img-fluid", "w-100")//html

        let nombres = document.createElement("h3")
        nombres.classList.add("text-center")
        nombres.textContent = medico.nombres

        //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombres)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})