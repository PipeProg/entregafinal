import {validarFormularioPaciente} from './ValidacionFormularioPacientes.js'
//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre, etiquetaDocumento,etiquetaRegimen, etiquetaGrupo, etiquetaCorreo, etiquetaTelefono, etiquetaCuota){

  


    let nombresPaciente = etiquetaNombre.value
    let documentoPaciente = etiquetaDocumento.value
    let regimenPaciente = etiquetaRegimen.value
    let telefonoPaciente = etiquetaTelefono.value
    let correoPaciente = etiquetaCorreo.value
    let grupoPaciente = etiquetaGrupo.value
    let cuotaPaciente = etiquetaCuota.value
 

    //debemos almacenar todos los valores del formulario en una sola variable
    //creamos objeto=almacenar varios datos en 1 solo espacio de memoria
    let datosFormularioPaciente = {nombrep : nombresPaciente,
        documentop : documentoPaciente,
        Regimenp : regimenPaciente, 
        telefonop : telefonoPaciente,
        correop : correoPaciente,
        grupop : grupoPaciente,
        cuotap : cuotaPaciente}
        //console.log(datosFormularioPaciente)
        validarFormularioPaciente(datosFormularioPaciente)

}