
class ElemView {
    #Szuloelem;
    #index;
    #allapot
  constructor(Szuloelem,index) {
    this.#Szuloelem = Szuloelem;
    this.#index = index;
    this.#allapot = true;
    this.#divek();
    this.elem =$(".elem:last-child");
    this.peElem = this.elem.children("p");
    this.elem.on("click",()=>{
      if (this.#allapot) {
        this.#esemenyTrigger("kivalaszt")
        this.#allapot = false;
      }
      

    })

  }
  #divek(){
    let txt = "";
        txt+=`<div class="elem">`;
        txt += `<p></p>`;
        txt+=`</div">`;
    
    this.#Szuloelem.append(txt);
}
getIndex(){
  return this.#index;
}
setErtek(ertek){
  this.peElem.html(ertek)
}

#esemenyTrigger(esemenynev){
  const esemenyem = new CustomEvent(esemenynev, {detail: this});
  window.dispatchEvent(esemenyem);
}
}

export default ElemView;
