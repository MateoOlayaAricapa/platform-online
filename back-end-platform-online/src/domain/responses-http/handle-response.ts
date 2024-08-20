import { Response } from "express";

export const handleResponse = ( res: Response, content: any ) => {
    if ( Array.isArray( content ) ) {
        return res.json({ status: 'success', data: content });
    }

    if ( content instanceof Object ) {
        return res.json({ status: 'success', data: { ...content } });
    }

    return res.json({ status: 'success', data: content });
}