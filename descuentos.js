

function calcularPrecioConDescuento(precio, desccuento){
    const precioConDescuento = precio - (precio * (desccuento/100));
    return precioConDescuento;
}
function ButtonDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    const parrafoResultado = document.getElementById("ResultPrice");
    parrafoResultado.innerText = "El total a pagar es: $" + precioConDescuento; 
}   