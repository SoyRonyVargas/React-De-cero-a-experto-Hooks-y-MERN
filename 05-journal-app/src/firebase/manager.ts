export const validatorError = ( err : string ) => {
    
    debugger

    switch( err ){
        case "auth/email-already-in-use":
            return "Correo electronico ya en uso."
        case "auth/popup-closed-by-user":
            return "Se cerro inesperadamente el pop up."
        case "auth/wrong-password":
            return "Contraseña incorrecta."
    }

}