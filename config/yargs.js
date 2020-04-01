
let descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
let completado = {
    completado:{
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente la tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Genera una nueva tarea.', {
        descripcion
    })
    .command('actualizar','Actualiza el estado de la tareas.', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina una tarea completada.',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}