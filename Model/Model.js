class Model {
  #allapot;
  lista = [];
  #lepes;


  constructor() {
    this.#allapot = " ";
    this.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.#lepes = 0;

  }

  setAllapot(index) {
    this.#lepes++;
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
    this.lista[index] = this.#allapot;
  }
  getErtek() {
    return this.#allapot;
  }
  vizSzintes() {
    let vTExt = "";
    for (let index = 0; index < this.lista.length; index++) {
      vTExt += this.lista[index];
      if (index % 3 == 2) {
        vTExt += "@";
      }
    }
    return vTExt;
  }
  fuggoleges() {
    let txt = "";
    for (let i = 0; i < 3; i++) {
      txt += this.lista[i] + this.lista[i + 3] + this.lista[i + 6];
      txt += "@";
    }
    return txt;
  }
  atlo() {
    let txt = "";
    txt += this.lista[0] + this.lista[4] + this.lista[8];
    txt += "@";
    txt += this.lista[2] + this.lista[4] + this.lista[6];
    return txt;
  }
  ellenorzes() {
    let nyert = "";
    let osszegzesTXT = 
      this.vizSzintes() + "@" + this.fuggoleges() + "@" + this.atlo() + "@";
    console.log(osszegzesTXT);
    if (osszegzesTXT.includes("OOO")) {
      nyert = "O";
    } else if (osszegzesTXT.includes("XXX")) {
      nyert = "X";
    } else if (
      !osszegzesTXT.includes("XXX") &&
      !osszegzesTXT.includes("OOO") &&
      !osszegzesTXT.includes(" ")
    ) {
      nyert = "Döntetlen";
    }
    return nyert;
  }
}
export default Model;
