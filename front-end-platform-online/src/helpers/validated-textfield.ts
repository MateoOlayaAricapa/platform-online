type IsValidatedReturn = {
    errorMessage?: string;
    status: boolean;
}

export class ValidatedValueTexfield {
    
    static isValidated( stateForm: { [key: string]: any } ): IsValidatedReturn {

        const attributesOfObject = Object.keys( stateForm );

        for ( const key of attributesOfObject ) {
           
            if ( stateForm[ key ] === '' ) return { errorMessage: `field [ ${ key } ] empty`, status: false };

        }

        return { status: true };

    }

}