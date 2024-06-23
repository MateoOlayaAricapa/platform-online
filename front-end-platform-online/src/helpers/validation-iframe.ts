export class ValidationIframe {

    static isValidUrl( url: string ): boolean {

        if ( url.includes('youtube.com') ) return true;
        if ( url.includes('youtu.be') ) return true;

        return false;

    }

}