# Proyecto React-Redux con Tailwind CSS

Este proyecto es una aplicación React que utiliza Redux para la gestión del estado y Tailwind CSS para el diseño. El proyecto permite crear, editar y eliminar tareas.

## Capturas de pantalla

### Formulario para añadir o editar tareas
![Formulario de tareas](/assets/task-form.jpg)

### Listado de tareas
![Listado de tareas](/assets/task-list.jpg)

## Instalación

Para ejecutar este proyecto localmente, necesitas seguir estos pasos:

### Prerrequisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [Node.js official website](https://nodejs.org/).

### Clonar el repositorio

Primero, clona este repositorio en tu máquina local usando:

```
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```
### Instalación de dependencias

#### Instalación de React
```
npx create-react-app mi-app
```
reemplazar mi-app por el nombre del proyecto o . para instalar sobre la carpeta actual

####  Instalación Redux y React-Redux

```
npm install redux react-redux
```

#### Instalación uuid

La biblioteca se utiliza para generar identificadores únicos universales.

```
npm install uuid
```

#### Instalación de React Router DOM

```
npm install react-router-dom
```
#### Instalación de Tailwind CSS

Se recomienda verificar la documentacion de Tailwind CSS: https://tailwindcss.com/docs/installation

```
npm install -D tailwindcss
npx tailwindcss init
```

* Configurar tailwind.config.js

Configurar "content:" de la siguiente manera:

```
content: ["./src/**/*.{html,js}"],
```

agregar en src/index.css las siguientes lineas:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Ejecutar el proyecto

```
npm start
```
