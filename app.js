function datos ( producto, precio ){
 
 
    this.producto = producto;
     this.precio = precio;
}
function costoFinal (precio, envio){
  let cantidad = Number (prompt ("Introducit cantidad"));  
  let costo = precio + envio * cantidad;
 
alert( `El ${prod} tiene un costo total de ${costo}`);
 
 let disp = confirm ("¿Confirmar compra?");
}
 
 let prod = prompt ("Introducir producto")
 
 const producto1 = new datos ( "cafe", 1400)
 
 
 costoFinal (producto1.precio, 900)