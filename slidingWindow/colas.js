//FIFO - Firts In Fisrt oUT (PRIMERO EN ENTRAR, PRIMERO EN SALIR)

class Cola{
    constructor(){
        this.elementos = [];
    }

    //Metodo para agregar un valor al final (enqueue)
    agregaElemento(valor){
        this.elementos.push(valor);
    }

    //Meotodo para quitar el primero (dequeue)
    quitarElemento(){
       return this.elementos.shift();
    }

    //Metodo de ver el primero
    verPrimero(){
        return this.elementos[0];
    }

    estaVacia(){
        return this.elementos.length === 0;
    }

    mostarCola(){
        return this.elementos;
    }
}
let filaTortillas = new Cola();

filaTortillas.agregaElemento("Ruben");
filaTortillas.agregaElemento("Diana");
filaTortillas.agregaElemento("Polono");

console.log(filaTortillas.mostarCola());
console.log(filaTortillas.verPrimero());
console.log(filaTortillas.quitarElemento());
console.log(filaTortillas.mostarCola());
