class Info {
  constructor(szuloElem, tartalom) {
    this.tartalom = tartalom;
    this.szuloElem = szuloElem;
    this.#Modul(szuloElem,tartalom);

  }
  #Modul(szuloElem,tartalom){
    let cim = "Játék vége";
    let text = ` <div class="info"><button id='Zarolas'>❌</button><h3>${cim}</h3>`;
    if (tartalom == "Döntetlen") {
      text += `<p>Tőbbet kell játszani -->   ${tartalom}</p>`;
    } else {
      text += `<p>A nyertes ebben a játékban -->   ${tartalom}</p>`;
    }
    text += `<button id='reset'> Visszavágó!</button>`;
    text += `</div>`;
    szuloElem.append(text);
    this.infoElem = $(".info");
    this.bezarElem = $( this.infoElem,"#Zarolas");
    this.ResetElem = $( this.infoElem,"#reset");
    this.bezarElem.on("click", () => this.infoElem.hide());
    this.ResetElem.on("click", () => location.reload());
  }
}
export default Info;
