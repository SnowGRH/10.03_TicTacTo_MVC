import ElemView from "./ElemView.js";
class jatekView {
  constructor(szuloElem, kesz) {
    for (let index = 0; index < 9; index++) {
      new ElemView(szuloElem, index);
    }
  }
}
export default jatekView;
