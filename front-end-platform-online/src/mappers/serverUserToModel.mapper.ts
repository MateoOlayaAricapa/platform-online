import { User } from "../models/user";

export interface ServerUser {
    nombre      : string;
    apellido    : string;
    foto_url    : null | string;
    profesion   : null | string;
    correo      : string;
    sobremi     : null | string;
}

export const serverUserToModel = ( serverUser: ServerUser ) => {

    const {
        apellido,
        correo,
        foto_url,
        nombre,
        profesion,
        sobremi,
    } = serverUser;

    const user = new User({
        apellido,
        correo,
        foto_url,
        nombre,
        profesion,
        sobremi,
    });

    return user.toJSON();

}