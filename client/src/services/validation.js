
const regexName=/([A-Z])\w+^[a-z0-9_:'()-]{2,60}$/
//{ nameGame, image, description, plataforms, released, rating, genre }
function validation() {
    const error={}
    if(nameGame ){
     regexName.test(nameGame)
     ?error.nameGame="Ok"
     : error.nameGame="Longitud de 2 a 60 caracteres. Solo letras, números y caracteres: _ : ' ( ) - ";
    }else {error.nameGame="No se permiten campos vacíos"}


}

export default validation