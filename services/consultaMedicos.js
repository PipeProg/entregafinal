export async function consultarMedico(){
    //consumiendo API's

    //1. conocer la dirección del API o Servicio    
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    //2. configurar a que voy al API
    //Configurando la request o petición
    //GET = leer //POST = insertar //PUT = editar
    //headers:{}  = si hay que aunteticar
    let peticion={
        method:"GET", 
        
    }

    //3.Consumir. Traer los datos del API
    let respuesta = await fetch(url,peticion)
    let medicos = await respuesta.json()

    return(medicos)

}