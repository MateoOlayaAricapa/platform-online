import axios, { AxiosInstance } from "axios";

export interface HttpAdapter {
    get<T>( url: string )             : Promise<T>;
    post<T>( url: string, data: any ) : Promise<T>;
    error( content: any )             : string;
}

export class AxiosApiAdapter implements HttpAdapter {

    private readonly axios: AxiosInstance = axios.create({
        baseURL: 'http://localhost:4000/api',
    });

    private settingTokenInHeader = () => {

        this.axios.interceptors.request.use(config => {
            config.headers['token-auth'] = localStorage.getItem( 'token' );
            return config;
        });

    }

    async get<T>( url: string ): Promise<T> {
        this.settingTokenInHeader();

        const { data } = await this.axios.get<T>( url );
        return data;
    }

    async post<T>( url: string, dataPost: any ): Promise<T> {
        this.settingTokenInHeader();

        const { data } = await this.axios.post<T>( url, dataPost );
        return data;
    }

    error( content: any ): string {
        
        if ( axios.isAxiosError( content ) ) {
            const { response } = content;

            return response!['data']['error'];
        }

        return 'Error en el proceso';

    }

}