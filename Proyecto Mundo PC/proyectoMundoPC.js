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