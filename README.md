# <p align="center">Org</p>
Proyecto desarrollado en los cursos React G6 - ONE.
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
