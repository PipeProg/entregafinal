import {validarFormulario} from './ValidacionFormularioMedicos.js'
//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre, etiquetaDocumento,etiquetaEspecialidad, etiquetaRegistro, etiquetaCorreo,  etiquetaSede, etiquetaHorario,etiquetaDescripcion, etiquetaImagen){

    let nombresMedico = etiquetaNombre.value
    let documentoMedico = etiquetaDocumento.value
    let especialidadMedico = etiquetaEspecialidad.value
    let registroMedico = etiquetaRegistro.value
    let correoMedico = etiquetaCorreo.value
    let sedeMedico = etiquetaSede.value
    let horarioMedico = etiquetaHorario.value
    let descripcionMedico = etiquetaDescripcion.value
    let imagenMedico = etiquetaImagen.value

    //debemos almacenar todos los valores del formulario en una sola variable
    //creamos objeto=almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioMedico = {nombre : nombresMedico,
        documento : documentoMedico,
        especialidad : especialidadMedico, 
        registro : registroMedico,
        correo : correoMedico,
        sede : sedeMedico,
        horario : horarioMedico,
        descripcion : descripcionMedico,
        foto: imagenMedico}
        //console.log(datosFormularioMedico)
        validarFormulario(datosFormularioMedico)

}
