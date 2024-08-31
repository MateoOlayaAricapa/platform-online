export const courseResponseGet = {
    id_curso        : expect.any( Number ),
    titulo          : 'Titulo curso 1',
    descripcion     : 'Descripción curso 1',
    fecha_creacion  : '2024-08-04T15:36:43.476Z',
    idioma          : 'Español',
    total_secciones : 30,
    total_clases    : 50,
    total_tiempo    : '450',
    video_url       : 'http://video1',
    imagen_url      : 'http://imagen1',
    createdAt       : '2024-08-04T15:36:43.789Z',
    deletedAt       : false,
    usuarioCurso    : expect.any( Array ),
    formacion       : expect.any( Array ),
    requisito       : expect.any( Array ),
    seccion         : expect.any( Array ),
    cursoTema       : expect.any( Array ),
}

export const courseResponsePut = {
    descripcion     : 'Descripción curso 1.1', 
    total_secciones : 40,
}