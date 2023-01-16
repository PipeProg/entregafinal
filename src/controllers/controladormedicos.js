//importaciones
import{capturarDatos} from '../formularios/formularioMedicos.js'

//Etiquetas de control
let etiquetaNombre = document.getElementById("nombres");
let etiquetaBoton = document.getElementById("botonenviar");
let etiquetaDocumento = document.getElementById("documento");
let etiquetaEspecialidad = document.getElementById("especialidad");
let etiquetaRegistro = document.getElementById("registro");
let etiquetaCorreo = document.getElementById("correo");
let etiquetaSede = document.getElementById("sede");
let etiquetaHorario = document.getElementById("horario");
let etiquetaDescripcion = document.getElementById("descripcion");
let etiquetaImagen = document.getElementById("imagen");
//evento detectar con click
etiquetaBoton.addEventListener("click",function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombre, etiquetaDocumento,etiquetaEspecialidad, etiquetaRegistro, etiquetaCorreo, etiquetaSede, etiquetaHorario, etiquetaDescripcion, etiquetaImagen);


    
    // Swal.fire(
    //     'Exito!',
    //     'El especialista ha sido registrado',
    //     'success'
    //   )
   
    //recibiendo datos del formulario


})


