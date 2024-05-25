# <p align="center">Org</p>
Proyecto React desarrollado en los cursos React G6 - ONE.
# Lista de Cursos
El proyecto esta compuesto por 2 partes:

![Completado](https://img.shields.io/badge/status-completado-brightgreen) 
- ✔️ **Curso de React: desarrollando con JavaScript:** desarrollo del Header y formulario para crear colaborador.

![En Progreso](https://img.shields.io/badge/status-en%20progreso-blue)
- [ ] **Curso de React: como los componentes funcionan:** formulario para crear un nuevo equipo y footer.

## Comando

### `npm start`

Inicia el proyecto en  [http://localhost:3000](http://localhost:3000) 

## <p align="center">Inconvenientes</p>
### Advertencia

    Note that the development build is not optimized.
    To create a production build, use npm run build. 
    
    webpack compiled successfully
    One of your dependencies, babel-preset-react-app, is importing the      
    "@babel/plugin-proposal-private-property-in-object" package without     
    declaring it in its dependencies. This is currently working because     
    "@babel/plugin-proposal-private-property-in-object" is already in your  
    node_modules folder for unrelated reasons, but it may break at any time.
    
    babel-preset-react-app is part of the create-react-app project, which   
    is not maintianed anymore. It is thus unlikely that this bug will       
    ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
    your devDependencies to work around this error. This will make this message
    go away.
    
### Solución

    npm install --save-dev @babel/plugin-proposal-private-property-in-object

## Proceso para subir a GitHub Pages
1. Ejecutar:
npm i gh-pages
2. Ir a package.json
    
Agregar homepage

    {
    "name": "org",
    "version": "0.1.0",
    "private": true,
    "homepage": "http://mariq12.github.io/org",
    ...
    }

3.	Ejecutar 

    npm run build

*Se crea la carpeta build*

4.	Ir a package.json

    a.	Agregar predeploy
    b.	Agregar Deploy

        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }

5.	Subir a GitHub

        a.	git status
        b.	git add .
        c.	git commit -m “gh-pages added”
        d.	git push
        e.	npm run deploy

## Ver Demo
### Parte 1
![org-part1](https://github.com/Mariq12/org/assets/101030215/66a8d71a-cc8c-42fa-aaf5-96ba9279cf48)

GitHub Pages: https://mariq12.github.io/org/
