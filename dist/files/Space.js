"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Space = /** @class */ (function () {
    function Space(elm) {
        var container;
        if (typeof elm === 'string') {
            var id = elm[0] === '#' || elm[0] === '.' ? elm : '#' + elm;
            container = document.querySelector(id);
        }
        else {
            container = elm;
        }
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'webjs_canvas');
        container.appendChild(canvas);
        this._canvas = canvas;
        this._ctx = this._canvas.getContext('2d');
    }
    return Space;
}());
exports.Space = Space;
//# sourceMappingURL=Space.js.map