type IsValidatedReturn = {
    errorMessage?: string;
    status: boolean;
}

export class ValidatedValueTexfield {
    
    static isValidated( stateForm: { [key: string]: any } ): IsValidatedReturn {

        const attributesOfObject = Object.keys( stateForm );

        for ( const key of attributesOfObject ) {
           
            if ( stateForm[ key ] === '' ) return { errorMessage: `field [ ${ key } ] empty`, status: false };
            if ( stateForm[ key ].length === 0 ) return { status: false, errorMessage: `field [ ${ key } ] empty` };

        }

        return { status: true };

    }

}