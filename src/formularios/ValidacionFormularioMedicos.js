export function validarFormulario(datos){

//referencia a etiquetas que quiero validar
    let etiquetaNombre = document.getElementById("nombres");
    let etiquetaDocumento = document.getElementById("documento");
    let etiquetaEspecialidad = document.getElementById("especialidad");
    let etiquetaRegistro = document.getElementById("registro");
    let etiquetaCorreo = document.getElementById("correo");
    let etiquetaSede = document.getElementById("sede");
    let etiquetaHorario = document.getElementById("horario");
    let etiquetaDescripcion = document.getElementById("descripcion");
    let etiquetaImagen = document.getElementById("imagen");

    //Validar campos fromulario
    let nombresMedico = datos.nombre
    let documentoMedico = datos.documento
    let especialidadMedico = datos.especialidad
    let registroMedico = datos.registro
    let correoMedico = datos.correo
    let sedeMedico = datos.sede
    let horarioMedico = datos.horario
    let descripcionMedico = datos.descripcion
    let imagenMedico = datos.imagen

    //agregar caminos posibles para validar formulario
    // if (nombresMedico =="" || documentoMedico =="" || especialidadMedico =="" || registroMedico =="" || correoMedico =="" || sedeMedico =="" || horarioMedico =="" ){
    //     alert("debe llenar todos los campos")
    // }
    if (nombresMedico =="" && documentoMedico ==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre y el documento son campos obligatorios',
            footer: '<a href="">SEA SERIO (A)</a>'
          })
    }else if(nombresMedico =="" && documentoMedico !=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es un campo obligatorio',
            footer: '<a href="">SEA SERIO (A)</a>'
          })
    }else if(nombresMedico !="" && documentoMedico ==""){
        etiquetaDocumento.classList.add("is-invalid")
        etiquetaNombre.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El documento es un campo obligatorio',
            footer: '<a href="">SEA SERIO (A)</a>'
          })
    }else{
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'nos vamos para la BD',
            showConfirmButton: false,
            timer: 2500
          })
        
    }
    //console.log("estamos validando...")
    //console.log(datos)
}