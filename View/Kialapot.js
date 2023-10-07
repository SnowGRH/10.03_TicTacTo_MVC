class Kialapot{
    #SzuloELEM;
    #ertek;
    constructor(elem,ertek){
    this.#SzuloELEM = elem;
    this.#ertek = ertek;
    this.Kiir();
    }
    Kiir(){
        let text = `<p>Következő:`;
        let alap = ``;
        if (this.#ertek == "X") {
            alap = `O`;
        }else{
            alap = `X`;
        }
        text += alap+`</p>`;
        this.#SzuloELEM.html(text);
    }
}
export default Kialapot