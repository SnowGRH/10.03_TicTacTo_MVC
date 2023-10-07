import jatekView from "../View/JatekView.js";
import Model from "../Model/Model.js"; 
import Info from "../View/info.js";
import Kialapot from "../View/Kialapot.js";
class Controller{
    #kesz;

    constructor(){
        const ELEM = $(".elem");
        const SZULO = $(".jatekter");
        const Kijon = $(".Kijon");
        const ELEMVIEW =new jatekView(SZULO,this.#kesz);
        const MODEL = new Model();
        new Kialapot(Kijon);
        $(window).on("kivalaszt",(event)=>{
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(MODEL.getErtek());
            this.#kesz = MODEL.ellenorzes();
            event.detail.setNyertes(this.#kesz);
            let ertek = MODEL.getErtek();
            new Kialapot(Kijon,ertek);
            if (this.#kesz == "X" || this.#kesz == "O" || this.#kesz == "Döntetlen" ) {
                $("div").off("click");
                new Info(SZULO, this.#kesz);
              }
        }) 
    }


}
export default Controller