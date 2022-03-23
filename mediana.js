const lista = [
    100,
    200,
    800,
    500,
    400000000,
];
function ordenarLista(lista){
    let listaOrdenada = [];
    let corredor = 0;
    const contador = lista.length;
    for(let i = 0; i < contador; i++){
       
        corredor = Math.min(...lista)
        listaOrdenada.push(corredor);
        let index = lista.indexOf(corredor);
        lista.splice(index,1);
    }
    return listaOrdenada;
}
function mitadLista(cantidadElementos){
    return parseInt(cantidadElementos / 2);
}
//const mitadLista = parseInt(lista.length / 2); 
function esPar(numero){
    if(numero % 2 === 0) return true;
    else return false;
}
let mediana;
function buscarMediana(lista){
    lista = ordenarLista(lista);
    const mitad = mitadLista(lista.length);
    if(esPar(lista.length)){
        return  (lista[mitad] + lista[mitad - 1]) / 2;
        
    }else return lista[mitad];
}