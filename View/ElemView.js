
class ElemView {
    #Szuloelem;

  constructor(Szuloelem,index) {
    this.#Szuloelem = Szuloelem;
    this.index = index;
    this.#divek();
    this.elem =$(".elem:last-child");
    this.peElem = this.elem.children("p");
    this.elem.on("click",()=>{
      this.#esemenyTrigger("kivalaszt")
    })

  }
  #divek(){
    let txt = "";
        txt+=`<div class="elem">`;
        txt += `<p></p>`;
        txt+=`</div">`;
    
    this.#Szuloelem.append(txt);
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
