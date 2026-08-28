# Desarrollo - Módulo 4: React

Este espacio contiene todos los Trabajos Prácticos (TPs) desarrollados durante los distintos Sprints del Módulo 4 de la Diplomatura.

##  Estructura de Carpetas

El espacio de trabajo está dividido por Sprints. Dentro de cada uno se encuentran los proyectos individuales, configurados de manera independiente.

```text
Diplomatura/
└── MODULO 4 -/
    └── desarrollo-modulo4/
        ├── m4-sprint1/
        │   ├── tp1/  (Presentación Personal)
        │   └── tp2/  (Landing Page diseñada con Stitch)
        ├── m4-sprint2/
        │   └── ...
```


## Cómo ejecutar los proyectos localmente

Cada Trabajo Práctico es una aplicación independiente. Para evaluar o correr cualquier proyecto, sigue estos pasos exactos:

1. Posiciónate en la carpeta del proyecto 

Abre tu terminal y navega hasta el directorio específico que deseas revisar. Por ejemplo:

```bash
cd m4-sprint1/tp1
```

2. Instala las dependencias necesarias

Vite requiere descargar los paquetes de Node antes de la primera ejecución. Corre el siguiente comando (solo es necesario hacerlo una vez por cada proyecto):



```bash
npm install
```

3. Inicia el servidor de desarrollo

Levanta el entorno local para visualizar la aplicación:

```bash
npm run dev
```