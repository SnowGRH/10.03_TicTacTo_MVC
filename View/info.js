class Info {
  constructor(szuloElem,tartalom) {
    let cim = "Játék vége";
    let text = ` <div class="info">
                        <button>❌</button>
                        <h3>${cim}</h3>
                        `
                        if (tartalom == "Döntetlen") {
                            text +=`<p>Tőbbet kell játszani --> <${tartalom}></p>`;
                        }else{
                        text +=`<p>A nyertes ebben a játékban --> <${tartalom}></p>`;
                        }

    text += `</div>`;
    szuloElem.append(text);
    this.infoElem = $(".info");
    this.bezarElem = $(".info button");
    this.bezarElem.on("click", () => this.infoElem.hide());
  }
}
export default Info;
