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
        return ` ${super.toString()} ${this._idRaton}`
    }
}

let raton1 = new Raton('Mouse','Genius');
console.log(raton1.toString());




