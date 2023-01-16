//importaciones
import{capturarDatos} from '../formularios/formularioPaciente.js'

//Etiquetas de control
let etiquetaNombre = document.getElementById("nombrep");
let etiquetaBoton = document.getElementById("botonregistrar");
let etiquetaDocumento = document.getElementById("documentop");
let etiquetaRegimen = document.getElementById("regimenp");
let etiquetaGrupo = document.getElementById("grupop");
let etiquetaTelefono = document.getElementById("telefonop");
let etiquetaCorreo = document.getElementById("correop");
let etiquetaCuota = document.getElementById("cuotap");



//evento detectar con click
etiquetaBoton.addEventListener("click",function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombre, etiquetaDocumento,etiquetaRegimen, etiquetaGrupo, etiquetaCorreo, etiquetaTelefono, etiquetaCuota);


    
    // Swal.fire(
    //     'Exito!',
    //     'El especialista ha sido registrado',
    //     'success'
    //   )
   
    //recibiendo datos del formulario


})