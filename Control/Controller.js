import jatekView from "../View/JatekView.js";
import Model from "../Model/Model.js"; 
class Controller{
    constructor(){
        const ELEM = $(".elem");
        const SZULO = $(".jatekter");
        const ELEMVIEW =new jatekView(SZULO);
        const MODEL = new Model();
        $(window).on("kivalaszt",(event)=>{
            
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(MODEL.getErtek());
            console.log(MODEL.vegeVanE());
        })
    }


}
export default Controller