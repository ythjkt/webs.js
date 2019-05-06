export class Space {
  protected _canvas: HTMLCanvasElement;
  protected _ctx: CanvasRenderingContext2D;

  constructor(elm: string | Element) {
    let container: Element;

    if (typeof elm === 'string') {
      let id = elm[0] === '#' || elm[0] === '.' ? elm : '#' + elm;
      container = document.querySelector(id);
    } else {
      container = elm;
    }

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'webjs_canvas');
    container.appendChild(canvas);

    this._canvas = canvas;
    this._ctx = this._canvas.getContext('2d');
  }
}
