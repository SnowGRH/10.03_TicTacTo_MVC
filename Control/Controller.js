import jatekView from "../View/JatekView.js";
import Model from "../Model/Model.js"; 
import Info from "../View/info.js";
class Controller{
    #kesz;

    constructor(){
        const ELEM = $(".elem");
        const SZULO = $(".jatekter");
        const ELEMVIEW =new jatekView(SZULO,this.#kesz);
        const MODEL = new Model();
        $(window).on("kivalaszt",(event)=>{
            
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(MODEL.getErtek());
            console.log(MODEL.ellenorzes());
            this.#kesz = MODEL.ellenorzes();
            event.detail.setNyertes(this.#kesz);
            if (this.#kesz == "X" || this.#kesz == "O" || this.#kesz == "Döntetlen" ) {
                $("div").off("click");
                new Info(SZULO, this.#kesz);
              }
        }) 
    }


}
export default Controller