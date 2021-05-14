/**********************************
 * Proyecto mundo PC en Javascrip
 *********************************/

class DispositivoEntrada {

    static contadorOrdenes = 0;

    constructor(tipoEntrada, marca){

        this._contadorOrdenes = ++DispositivoEntrada.contadorOrdenes;
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

    toString(){
        return `Orden: ${this._contadorOrdenes} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

let dispositivo1 = new DispositivoEntrada('teclado','VIT');
console.log(dispositivo1.toString());





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
        return ` ${super.toString()} idRatón: ${this._idRaton}`
    }
}

let raton1 = new Raton('Mouse','Genius');
console.log(raton1.toString());

let raton2 = new Raton('Mouse', 'Hp');
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
        return `${super.toString()} idteclado: ${this._idTeclado} `
    }
}

let teclado1 = new Teclado('Teclado','Máximus');
console.log(teclado1.toString());

let teclado2 = new Teclado('Teclado','Dell');
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
        return ` idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._size} pulgadas`;
    }
}  

let monitor1 = new Monitor('Samsung',25); 
console.log(monitor1.toString());




