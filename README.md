# FarmaFácil(BackEnd)

- This project presents a comprehensive management system for pharmacies, developed to optimize the control of inventory, sales, reports, and user management.
- Registration, updating, and tracking of products, prices, and suppliers.
- Creation of user profiles with different permissions and access to the system.
- Sales processing with automatic inventory update.
- Generation of customized reports.

# FarmaFácil(FrontEnd)
[Click for FrontEnd Repository](https://github.com/mike2611/vue-farmacia)

## Built with:

- Express.js
- NodeJs

## Prerequisites

- Node.js v18 installed
  - For Node.js installation on your system, we recommend using nvm (Node Version Manager)
    - Use the following command in your terminal for installation on (Ubuntu, Debian, and CentOS) systems: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    - For installation on Windows, see this manual with detailed instructions: https://4geeks.com/how-to/nvm-install-windows


## Running the Application

- Run the following commands:
  - Clone the project from the repository: https://github.com/mike2611/express-farmacia.git

  - Enter the folder where the project was installed: cd express-farmacia

  - In the database.js file, add your database details:
 ```
 const db = mysql.createConnection({
          host: 'addHostName',
          user: 'addYourUsername',
          password: 'addYourPassword',
          database: 'addYourDatabaseName',
          port: 'addDatabaseConnectionPort'
        });
 ```


- Once everything is configured, run: npm run dev

- If you followed all these steps correctly, your server should be up and running.

## Collaborators:
- @mike2611
- @MaoRusk

---

# Español

# FarmaFácil(BackEnd)

- Este proyecto presenta un sistema de gestión integral para farmacias, desarrollado para optimizar el control de inventario, ventas, reportes y gestión de usuarios.
- Registro, actualización y seguimiento de productos, vencimientos, precios y proveedores.
- Creación de perfiles de usuario con diferentes permisos y accesos al sistema
- Procesamiento de ventas con actualización automática del inventario
- Generación de informes personalizados

# FarmaFácil(FrontEnd)
[Click para repositorio FrontEnd](https://github.com/mike2611/vue-farmacia)

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
