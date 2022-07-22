import { SignGoogleStatus } from "../../src/store/auth/authSlice"
import { UserWithEmailAndPassword } from "../../src/auth/types"

export const UserAuthCorrect : SignGoogleStatus = {
    ok: true,
    displayName: "Usuario Pruebas",
    email: "prueba@gmail.com",
    message: undefined,
    photoURL: "https://www.tiempox.com/u/fotografias/m/2022/7/16/f608x342-38173_67896_15.png",
    uid: "123ABC"
}

export const UserAuthIncorrect : SignGoogleStatus = {
    ok: false,
    displayName: null,
    email: null,
    message: "Usuario incorrecto",
    photoURL: null,
    uid: undefined
}

export const UserAndPassword : UserWithEmailAndPassword = {
    email: "prueba@gmail.com",
    password: "123456",
    displayName: ""
}