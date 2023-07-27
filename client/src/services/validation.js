
const regexName = /([A-Z])\w+^[a-z0-9_:'()-]{2,60}$/
//{ nameGame, image, description, plataforms, released, rating, genre }
function validation(name, value ) {
    switch (name) {
        case 'nameGame':
            if (value.trim()) {
                return regexName.test(value)
                    ? "Ok"
                    : "Longitud de 2 a 60 caracteres. Solo letras, números y caracteres: _ : ' ( ) - ";
            } else { return "No se permiten campos vacíos" }
        default:
            break;
    }
}

export default validation