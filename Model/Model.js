class Model{
    #allapot;
    #lista=[];
    #lepes ;
    constructor(){
        this.#allapot="X";
        this.#lista = [" "," "," "," "," "," "," "," "," "]
        this.#lepes = 0;
    }
    setAllapot(index){
        this.#lepes++;
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else {
            this.#allapot = "X"
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista);
    }
    getErtek(){
        return this.#allapot;
    }
    vegeVanE(){
        let eredemeny = this.#vizszintesEll()
        if (eredemeny.indexOf("XXX")>-1) {
            return "X nyert"
        }else if (eredemeny.indexOf("OOO")>-1) {
            return "O nyert"
        }
        if (this.#lepes >=9) {
            return "döntetlen";
        }
            return "nincs vége";
        
    }
    #vizszintesEll(){
        let vTExt ="";
        for (let index = 0; index < this.#lista.length; index++) {
            vTExt+=this.#lista[index]
            if (index%3==2) {
                vTExt+="@";
            }
            
        }
        console.log(vTExt);
        return vTExt;
    }
}
export default Model