class ElemView {
    #Szuloelem;

  constructor(Szuloelem) {
    this.#Szuloelem = Szuloelem;
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
    
    this.#Szuloelem.html(txt);
}
setErtek(ertek){
  this.peElem.html(ertek)
}

#esemenyTrigger(esemenynev){
  const esemenyem = new CustomEvent(esemenynev);
  window.dispatchEvent(esemenyem);
}
}

export default ElemView;
