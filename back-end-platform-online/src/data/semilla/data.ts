import { BcriptAdapter } from "../config";

export const seedData = {

    users: [
        { nombre: 'Mateo', apellido: 'Olaya', correo: 'test1@gmail.com', contrasena: BcriptAdapter.hash('password') },
        { nombre: 'Jasson', apellido: 'Narvaez', correo: 'test2@gmail.com', contrasena: BcriptAdapter.hash('password') },
    ],

    courses: [
        {   //Mateo lo creo
            titulo: 'Titulo curso 1',
            descripcion: 'Descripción curso 1',
            fecha_creacion: new Date(),
            idioma: 'Español',
            total_secciones: 30,
            total_clases: 50,
            total_tiempo: '450',
            video_url: 'http://video1',
            imagen_url: 'http://imagen1',
            formacion: [
                { contenido: 'Formación 1 - TC1' },
                { contenido: 'Formación 2 - TC1' },
                { contenido: 'Formación 3 - TC1' },
                { contenido: 'Formación 4 - TC1' }
            ],
            secciones: [
                {
                    titulo: 'Tablas - listado de países',
                    total_tiempo: '45',
                    clases: [
                        {
                            titulo: 'Demostración',
                            tiempo: '1',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Docker',
                            tiempo: '2',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                },
                {
                    titulo: 'Gráficos y SVGs',
                    total_tiempo: '10',
                    clases: [
                        {
                            titulo: 'Mostrar SVGs',
                            tiempo: '1',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Utilidades para Chart.js',
                            tiempo: '2',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                }
            ],
            requisitos: [
                { contenido: 'Requisito 1 - TC1' },
                { contenido: 'Requisito 2 - TC1' },
                { contenido: 'Requisito 3 - TC1' },
                { contenido: 'Requisito 4 - TC1' }
            ],
        },
        {   //Mateo lo creo
            titulo: 'Titulo curso 2',
            descripcion: 'Descripción curso 2',
            fecha_creacion: new Date(),
            idioma: 'Inglés',
            total_secciones: 10,
            total_clases: 20,
            total_tiempo: '250',
            video_url: 'http://video2',
            imagen_url: 'http://imagen2',
            formacion: [
                { contenido: 'Formación 1 - TC2' },
                { contenido: 'Formación 2 - TC2' },
                { contenido: 'Formación 3 - TC2' },
                { contenido: 'Formación 4 - TC2' }
            ],
            secciones: [
                {
                    titulo: 'Introducción',
                    total_tiempo: '14',
                    clases: [
                        {
                            titulo: '¿Cómo funciona PdfMake?',
                            tiempo: '3',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Report components',
                            tiempo: '10',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                },
                {
                    titulo: 'Preparación proyecto',
                    total_tiempo: '27',
                    clases: [
                        {
                            titulo: 'Refactorización',
                            tiempo: '3',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Constancia empleo',
                            tiempo: '3',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                }
            ],
            requisitos: [
                { contenido: 'Requisito 1 - TC2' },
                { contenido: 'Requisito 2 - TC2' },
                { contenido: 'Requisito 3 - TC2' },
                { contenido: 'Requisito 4 - TC2' }
            ],
        },
        {   //Carlos lo creo
            titulo: 'Titulo curso 3',
            descripcion: 'Descripción curso 3',
            fecha_creacion: new Date(),
            idioma: 'Aleman',
            total_secciones: 10,
            total_clases: 20,
            total_tiempo: '50',
            video_url: 'http://video3',
            imagen_url: 'http://imagen3',
            formacion: [
                { contenido: 'Formación 1 - TC3' },
                { contenido: 'Formación 2 - TC3' },
                { contenido: 'Formación 3 - TC3' },
                { contenido: 'Formación 4 - TC3' }
            ],
            secciones: [
                {
                    titulo: 'Constancia de empleo',
                    total_tiempo: '80',
                    clases: [
                        {
                            titulo: 'Gráfica lineal',
                            tiempo: '5',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Parámetros adicionales',
                            tiempo: '7',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                },
                {
                    titulo: 'Recibo de compra',
                    total_tiempo: '60',
                    clases: [
                        {
                            titulo: 'Reporte de dona',
                            tiempo: '2',
                            url_contenido: 'http://contenido1',
                            tipo: 'video',
                            estaCompletado: false
                        },
                        {
                            titulo: 'Reutilizar código',
                            tiempo: '15',
                            url_contenido: 'http://contenido2',
                            tipo: 'video',
                            estaCompletado: false
                        }
                    ]
                }
            ],
            requisitos: [
                { contenido: 'Requisito 1 - TC3' },
                { contenido: 'Requisito 2 - TC3' },
                { contenido: 'Requisito 3 - TC3' },
                { contenido: 'Requisito 4 - TC3' }
            ],
        }
    ],

    topics: [
        { nombre: 'Software' },
        { nombre: 'Servicios' },
        { nombre: 'Arquitectura' },
        { nombre: 'Pruebas automatizadas' },
    ],

}