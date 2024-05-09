# CHALLENGUE

Desarrollado por Danny Salazar

# Description
CRUD de books usando servicios serverless como dynamodb y lambda en AWS


# Requirements
- [Node.js 20.11.0 with npm](https://nodejs.org/en/download/releases/)


# Offline mode
    npm run dev


# Testing
    npm run test


# Deploy
    1. Correr comando para instalar dependencias: npm run install
    1. Colocar credenciales AWS (cuenta con permiso de administrador) en un archivo .env
        AWS_ACCESS_KEY_ID=xxxxx
        AWS_SECRET_ACCESS_KEY=xxxx
    2. Levantar los servicios en AWS: npm run deploy


# model_x
    Se ha creado una clase Book que requiere los campos title y author para
    su creación y edición en formato json

    {
        "title": "Libro 1",
        "author": "Danny S."
    }
