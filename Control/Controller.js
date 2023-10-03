import ElemView from "../View/ElemView.js"; 
import Model from "../Model/Model.js"; 
class Controller{
    constructor(){
        const ELEM = $(".elem");
        const SZULO = $(".jatekter");
        const ELEMVIEW =new ElemView(SZULO);
        const MODEL = new Model();
        ELEMVIEW.setErtek(MODEL.getErtek());
        $(window).on("kivalaszt",()=>{
            MODEL.setAllapot();
            ELEMVIEW.setErtek(MODEL.getErtek());
        })
    }


}
export default Controller