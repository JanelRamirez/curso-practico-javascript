
//helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function mediana(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const mitad1 = lista[mitad-1];
        const mitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([mitad1, mitad2]);
        return mediana;
    }else {
        return lista[mitad];
    }
    
}

 const salariosRD = RD.map(
     function(persona){
        return persona.salary;
     }
 );

 const salariosRDSorted = salariosRD.sort(
     function(salaryA, salaryB){
        return salaryA - salaryB;
     }
 );




const medianaGeneralRD = mediana(salariosRDSorted)

const spliceStart = ( salariosRDSorted.length * 90 ) / 100;
const spliceCount = salariosRDSorted.length - spliceStart;

const salariosRDTop10 = salariosRDSorted.splice(spliceStart, spliceCount);

const medianaTop10RD = mediana(salariosRDTop10);

console.log(
    {
       medianaGeneralRD,
       medianaTop10RD,
    }
);