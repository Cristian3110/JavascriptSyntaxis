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
        return ` Ratón:[idRatón: ${this._idRaton} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}]`
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooh', 'Genius');
raton2.marca = 'Dell';
console.log(raton2.toString());





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

let teclado1 = new Teclado('USB','Máximus');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooh','Dell');
console.log(teclado2.toString());





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
        return `Monitor: [idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._size} pulgadas]`;
    }
}  

let monitor1 = new Monitor('Samsung',25); 
console.log(monitor1.toString());


class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, Monitor, Teclado, Raton){

        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
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

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        return this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        return this._raton = raton;
    }

    toString(){
        return `${this._idComputadora} ${this._nombre} ${this._monitor} ${this._teclado} ${this._raton}`;
    }
}

let computadora1 = new Computadora('Lenovo','VIT','dell','genius');
console.log(computadora1.toString());

