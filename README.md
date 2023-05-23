# FarmaFácil(BackEnd)

> Este es el back del proyecto para fármacia de la clase bases de datos y lenguajes

## Se hizo con

- express
- NodeJs

## Pre requisitos

- Node.js instalado


## Correr Aplicación

- Corra los siguientes comandos:
  - Se clona el proyecto desde el repositorio https://github.com/mike2611/express-farmacia.git

  - Se ingresa a la carpeta donde se instaló el proyecto cd express-farmacia

  - En el archivo database.js agregar los datos de su base de datos
 ```
 const db = mysql.createConnection({
          host: 'agregarNombreHost',
          user: 'agregarSuUsuario',
          password: 'agregarSuContraseña',
          database: 'agreagerNombreDeSuBaseDeDatos',
          port: 'agregarElPuertoDeConexionALaBaseDeDatos'
        });
 ```


- Una vez configurado todo correr npm run dev

- Si realizo todos estos pasos correctamente su servidor debería estar arriba

## Colaboradores
- @mike2611
- @MaoRusk
