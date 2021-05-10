/************************************************
 *   Proyecto de Sistema de Ventas
 ********************************************/

class Producto {

    static contadorProductos = 0;

        constructor(nombre, precio){

            this._idProductos = ++Producto.contadorProductos;
            this._nombre = nombre;
            this._precio = precio;
    }

    get idProducto(){
        return this._idProductos;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return ` idProducto: ${this._idProductos}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
    
}


let producto1 = new Producto('Patalón',500);
let producto2 = new Producto('Camisa',300);

console.log(producto1.toString());
console.log(producto2.toString());










