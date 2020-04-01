const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
 
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar.', err); 
    });
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (e) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let tarea = listadoPorHacer.find(item => item.descripcion === descripcion);
    
    if(tarea){
        tarea.completado = completado;
        guardarDB();
        return `Tarea: ${ tarea.descripcion } actualizada.`
    }else{
        return `La tarea no existe.`
    }

}

const eliminar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
   
    if( index >= 0 ){
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return `Tarea eliminada.`
    }else{
        return `La tarea no existe.`
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}




module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}