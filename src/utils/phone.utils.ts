import {parsePhoneNumberFromString, getExampleNumber,} from "libphonenumber-js";

import examples from "libphonenumber-js/mobile/examples";


/**Funcion Para verificar si el Numero esta en el formato correcto segun el pais**/

export function ValidatePhone(callingCode, phone) {

    const fullPhone = `${callingCode}${phone}`;

    const parsedPhone = parsePhoneNumberFromString(fullPhone);
    if (!parsedPhone?.isValid()) {return null;}

    return parsedPhone;
}

/**Funcion Para mostrar un ejemplo del formato correcto del numeor si lo escriben mal**/

export function GetPhoneExample(countryCode
) {

    const example =
        getExampleNumber(countryCode, examples);

    return (
        example?.formatInternational() || ""
    );

}