import { Response } from "express";
import { CustomError } from "./custom-error";

export const handleError = ( error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {
        return res.status( error.statusCode ).json({ status: 'failed', error: error.message })
    }

    return res.status( 500 ).json({ status: 'failed', error: 'Error interno del servidor' });

}

export const handleErrorDTO = ( error: string, res: Response, statusCode: number = 400 ) => {
    return res.status( statusCode ).json({ status: 'failed', error });
}