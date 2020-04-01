const colors = require('colors');
const  argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, eliminar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let tareas = getListado();

        for (const tarea of tareas) {         
            console.log(`\n===== Por Hacer =====`.cyan);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.cyan);
        }

        break; 

    case 'actualizar':
        let msg = actualizar(argv.descripcion, argv.completado);
      
        console.log(`\n${ msg } `.yellow); 
        break;
    case 'eliminar':
        let msg2 = eliminar(argv.descripcion);
        
        console.log(`\n${ msg2 } `.yellow); 
        break;

    default:
        console.log('El comando ingresado no es reconocido.'.red);
        break;
}