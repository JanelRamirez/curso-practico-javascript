const lista = [
    1,2,3,4,2,2,2,2,1,
];
const listaCount = {};

lista.map(
    function(element){
        if(listaCount[element]){
            listaCount[element] += 1;
        }else{
            listaCount[element] = 1;
        }
    }
);
const listaArray = Object.entries(listaCount).sort(
    function(elementA, elementoB) {
        return elementA[1] - elementoB[1];
    }
);
const moda = listaArray[listaArray.length -1];