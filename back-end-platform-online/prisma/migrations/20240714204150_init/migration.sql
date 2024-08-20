-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "sobremi" TEXT,
    "profesion" TEXT,
    "foto_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "usuario_curso" (
    "id_usuario_curso" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "rol" TEXT NOT NULL,
    "estaCompletado" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usuario_curso_pkey" PRIMARY KEY ("id_usuario_curso")
);

-- CreateTable
CREATE TABLE "curso" (
    "id_curso" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "idioma" TEXT NOT NULL,
    "total_secciones" INTEGER NOT NULL,
    "total_clases" INTEGER NOT NULL,
    "total_tiempo" TEXT NOT NULL,
    "video_url" TEXT,
    "imagen_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "formacion" (
    "id_formacion" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "formacion_pkey" PRIMARY KEY ("id_formacion")
);

-- CreateTable
CREATE TABLE "requisito" (
    "id_requisito" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "requisito_pkey" PRIMARY KEY ("id_requisito")
);

-- CreateTable
CREATE TABLE "tema" (
    "id_tema" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tema_pkey" PRIMARY KEY ("id_tema")
);

-- CreateTable
CREATE TABLE "curso_tema" (
    "id_curso_tema" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "id_tema" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "curso_tema_pkey" PRIMARY KEY ("id_curso_tema")
);

-- CreateTable
CREATE TABLE "seccion" (
    "id_seccion" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "total_tiempo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "seccion_pkey" PRIMARY KEY ("id_seccion")
);

-- CreateTable
CREATE TABLE "clase" (
    "id_clase" SERIAL NOT NULL,
    "id_seccion" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "tiempo" TEXT NOT NULL,
    "url_contenido" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "estaCompletado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "clase_pkey" PRIMARY KEY ("id_clase")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_contrasena_key" ON "usuario"("contrasena");

-- AddForeignKey
ALTER TABLE "usuario_curso" ADD CONSTRAINT "usuario_curso_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_curso" ADD CONSTRAINT "usuario_curso_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formacion" ADD CONSTRAINT "formacion_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisito" ADD CONSTRAINT "requisito_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso_tema" ADD CONSTRAINT "curso_tema_id_tema_fkey" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_tema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso_tema" ADD CONSTRAINT "curso_tema_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seccion" ADD CONSTRAINT "seccion_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase" ADD CONSTRAINT "clase_id_seccion_fkey" FOREIGN KEY ("id_seccion") REFERENCES "seccion"("id_seccion") ON DELETE RESTRICT ON UPDATE CASCADE;
