const regexName = /^[a-zA-Z0-9_:'()\-\s]{2,60}$/;
const regexUrl = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;
const regexDate = /^(198\d|199\d|200\d|201\d|202[0-3])-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/;
//{ nameGame, image, description, plataforms, released, rating, genre }
function validation(name, value) {
    let answer = ''
    switch (name) {
        case 'nameGame':
            if (value === "") answer = "This field can not be empty"
            else answer = regexName.test(value) ? "ok"
                : "Length: 2 - 60. Only acepted A-Z, 0-9, : _ ' ( ) -"
            break;
        case 'image':
            if (value === "") answer = "This field can not be empty"
            else answer = regexUrl.test(value) ? "ok"
                : answer = "This field must be a URL"
            break;
        case 'description':
            if (value === "") answer = "This field can not be empty"
            else answer = value.length >= 10 && value.length <= 300 ? "ok"
                : answer = "Length: 10 - 300"
            break;
        case 'released':
            if (value === "") answer = "This field can not be empty"
            else answer = regexDate.test(value) ? "ok"
                : answer = "This field must be a date from 1980 to 2023"
            break;
        default:
            break;
    }
    return answer
}

export default validation