export const userLoginRequest = { 
    email   : 'test2@gmail.com', 
    password: 'password', 
};

export const userLoginResponse = {
    nombre      : 'Jasson',   
    apellido    : 'Narvaez',
    foto_url    : null,     
    profesion   : null,    
    correo      : userLoginRequest.email,
    sobremi     : null,
}

export const unregisteredUser = {
    email   : 'test5@gmail.com', 
    password: 'password',
}

export const userLoginWithoutEmail = {
    password: 'password',
}

export const registerUserRequestPost = {
    nombres     : 'Carlos',
    apellidos   : 'Mosquera',
    correo      : 'test3@gmail.com',
    contrasena  : 'password',
}

export const registerUserResponsePost = {
    nombre    : registerUserRequestPost.nombres,    
    apellido  : registerUserRequestPost.apellidos,
    foto_url  : null,      
    profesion : null,
    correo    : registerUserRequestPost.correo,
    sobremi   : null
}

export const userTest = {
    nombres     : 'Camila',
    apellidos   : 'León',
    correo      : 'test4@gmail.com',
    contrasena  : 'password',
}

export const userTestLogin = {
    email   : userTest.correo, 
    password: userTest.contrasena, 
}

export const userTestUpdate = {
    apellido    : 'León Ramirez',
    sobremi     : 'Soy profesora en la universidad',
    profesion   : 'Ingeniera ambiental',
}

export const userTestResponseUpdate = {
    nombre      : userTest.nombres,        
    apellido    : userTestUpdate.apellido,
    foto_url    : null,
    profesion   : userTestUpdate.profesion,
    correo      : userTest.correo,
    sobremi     : userTestUpdate.sobremi
}