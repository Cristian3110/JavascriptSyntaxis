/**********************************
 * Proyecto mundo PC en Javascrip
 *********************************/

class DispositivoEntrada {

    
    constructor(tipoEntrada, marca){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get contadorOrdenes(){
        return this._contadorOrdenes;
    }

    get tipoEntrada (){
        return this._tipoEntrada;
    }

    set tipoEntrada (tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca (){
        return this._marca;
    }

    set marca (marca){
        return this._marca = marca;
    }
}





class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){

        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Ratón:[idRatón: ${this._idRaton} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}]`
    }
}





class Teclado extends DispositivoEntrada {

    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){

        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
        
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado:[idteclado: ${this._idTeclado} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}] `
    }
}





class Monitor {

    static contadorMonitores = 0;
    
    constructor(marca, size){

        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._size = size;
    }

    get idMonitor(){
        return this.idMonitor;
    }

    get marca(){
        return this.marca;
    }

    set marca(marca){
        return this._marca = marca;
    }

    get size(){
        return this._size;
    }

    set size(size){
        return this._size = size;
    }

    toString(){
        return `Monitor:[idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._size} pulgadas]`;
    }
}  





class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){

        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        return this._monitor = monitor;
    }
    
    get raton(){
        return this._raton;
    }

    set raton(raton){
        return this._raton = raton;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        return this._teclado = teclado;
    }

    toString(){
        return `Computadora: [${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}]`;
    }
}





class Orden {

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras){
            computadorasOrden += ` \n${computadora}`
        }

        console.log(`Orden: ${this.idOrden}, Computadoras: ${computadorasOrden}`)
    }

}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooh', 'Genius');
raton2.marca = 'Dell';
console.log(raton2.toString());


let teclado1 = new Teclado('USB','MSI');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooh','Dell');
console.log(teclado2.toString());

let monitor1 = new Monitor('Samsung',25); 
console.log(monitor1.toString());


let computadora1 = new Computadora('Lenovo',monitor1,raton1,teclado1);
console.log(computadora1.toString());

// También podemos llamar al método toString de la siguiente manera
let computadora2 = new Computadora('MSI', monitor1, raton2, teclado2);
console.log(`${computadora2}`);


// Creando la primera orden de computadoras
let Orden1 = new Orden();
Orden1.agregarComputadora(computadora1);
Orden1.agregarComputadora(computadora2);
Orden1.agregarComputadora(computadora2);

Orden1.mostrarOrden();
