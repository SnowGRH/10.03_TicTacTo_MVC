class Kialapot{
    #SzuloELEM;
    #ertek;
    constructor(elem,ertek){
    this.#SzuloELEM = elem;
    this.#ertek = ertek;
    this.Kiir();
    }
    Kiir(){
        let text = `<p> Következő:`;
        let alap = ``;
        if (this.#ertek == "O") {
            alap = `X`;
        }else{
            alap = `O`;
        }
        text += alap+`</p>`;
        this.#SzuloELEM.html(text);
    }
}
export default Kialapot