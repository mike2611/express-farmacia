# FarmaFácil(BackEnd)

- Este proyecto presenta un sistema de gestión integral para farmacias, desarrollado para optimizar el control de inventario, ventas, reportes y gestión de usuarios.
- Registro, actualización y seguimiento de productos, vencimientos, precios y proveedores.
- Creación de perfiles de usuario con diferentes permisos y accesos al sistema
- Procesamiento de ventas con actualización automática del inventario
- Generación de informes personalizados

# FarmaFácil(FrontEnd)
[Click for FrontEnd Repository](https://github.com/mike2611/vue-farmacia)

## Se hizo con

- Express.js
- NodeJs

## Pre requisitos

- Node.js instalado v18
  - Para la instalación de Node.js en su sistema se hace la recomendación de usar nvm (Node Version Manager) 
    - Use el siguiente comando en su terminal para la instalación en los sistemas (Ubuntu, Debian y CentOS) curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    - Para la instalación en Windows vea este manual con las instrucciones detalladas https://4geeks.com/how-to/nvm-install-windows


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
