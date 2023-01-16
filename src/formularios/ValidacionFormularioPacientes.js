export function validarFormularioPaciente(datos){

    //referencia a etiquetas que quiero validar
    let etiquetaNombre = document.getElementById("nombrep");
    let etiquetaDocumento = document.getElementById("documentop");
    let etiquetaRegimen = document.getElementById("regimenp");
    let etiquetaGrupo = document.getElementById("grupop");
    let etiquetaTelefono = document.getElementById("telefonop");
    let etiquetaCorreo = document.getElementById("correop");
    let etiquetaCuota = document.getElementById("cuotap");
    
        //Validar campos fromulario
        let nombresPaciente = datos.nombrep
        let documentoPaciente = datos.documentop
        let regimenPaciente = datos.regimenp
        let grupoPaciente = datos.grupop
        let telefonoPaciente = datos.telefonop
        let correoPaciente = datos.correop
        let cuotaPaciente = datos.cuotap

    
        //agregar caminos posibles para validar formulario
        // if (nombresPaciente =="" || documentoPaciente =="" || especialidadPaciente =="" || registroPaciente =="" || correoPaciente =="" || sedePaciente =="" || horarioPaciente =="" ){
        //     alert("debe llenar todos los campos")
        // }
        if (nombresPaciente =="" && documentoPaciente ==""){
            etiquetaNombre.classList.add("is-invalid")
            etiquetaDocumento.classList.add("is-invalid")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El nombre y el documento son campos obligatorios',
                footer: '<a href="">SEA SERIO (A)</a>'
              })
        }else if(nombresPaciente =="" && documentoPaciente !=""){
            etiquetaNombre.classList.add("is-invalid")
            etiquetaDocumento.classList.remove("is-invalid")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El nombre es un campo obligatorio',
                footer: '<a href="">SEA SERIO (A)</a>'
              })
        }else if(nombresPaciente !="" && documentoPaciente ==""){
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
        console.log(datos)
    }