//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4; 
}
 
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");

//perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//area del triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
function alturaTrianguloIsosceles(lado1, base){
    return Math.sqrt( (lado1 * lado1) - ( (base * base) / 4 ) );
}
console.groupEnd();

//Codigo de circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio*2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();
// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo-lado1");
    const inputLado2 = document.getElementById("inputTriangulo-lado2");
    const inputBase = document.getElementById("inputTriangulo-base");
    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputBase.value);
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAlturaTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo-lado1");
    const inputLado2 = document.getElementById("inputTriangulo-lado2");
    const inputBase = document.getElementById("inputTriangulo-base");
    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputBase.value);
    var altura;
    if(lado1 == lado2){
        altura = alturaTrianguloIsosceles(lado1,base);
    }else if(lado1 == base){
        altura = alturaTrianguloIsosceles(lado1,lado2);
    }else if(lado2 == base){
        altura = alturaTrianguloIsosceles(lado2,lado1);
    }else{
        alert("No es un triangulo isosceles");
        return;
    }

    alert(altura);
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("inputTriangulo-altura");
    const inputBase = document.getElementById("inputTriangulo-baseA");
    const altura = Number(inputAltura.value);
    const base = Number(inputBase.value);
    
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);

    const area = areaCirculo(radio);
    alert(area);
}

