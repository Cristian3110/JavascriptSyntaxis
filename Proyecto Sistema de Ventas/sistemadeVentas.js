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


class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){

        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this.producto[this._contadorProductosAgregados++] = producto;
        } else {
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }

}


let producto1 = new Producto('Patalón',500);
let producto2 = new Producto('Camisa',300);

console.log(producto1.toString());
console.log(producto2.toString());










