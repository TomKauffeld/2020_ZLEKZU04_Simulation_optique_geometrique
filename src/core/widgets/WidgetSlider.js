import IWidget from './IWidget';

// eslint-disable-next-line no-unused-vars
import {p5InstanceExtensions} from 'p5';

class WidgetSlider extends IWidget {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w
     * @param {number} h
     * @param {number} def
     * @param {number} min
     * @param {number} max
     */
    constructor(x, y, w, h, def, min = 0, max = 1) {
        super(x, y, w, h);
        this.__val = (def - min) / (max - min);
        this.__min = min;
        this.__max = max;
        this.__c = {
            r: 255,
            g: 255,
            b: 255
        };
    }

    /**
     * 
     * @param {number} r 
     * @param {number} g 
     * @param {number} b 
     */
    setColor(r, g, b) {
        this.__c.r = r;
        this.__c.g = g;
        this.__c.b = b;
    }

    getValue() {
        return this.__val * (this.__max - this.__min) + this.__min;
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} time
     */
    tick(sketch, time) {
        super.tick(sketch, time);
        if (this.__lastPressed) {
            this.__val = this.__mouse_x / this.__w;
        }
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} scale
     * @param {number} width
     * @param {number} height
     */
    render(sketch, scale, width, height) {
        super.render(sketch, scale, width, height);
        sketch.rectMode(sketch.CORNER);
        sketch.noStroke();
        sketch.fill(this.__c.r, this.__c.g, this.__c.b);
        sketch.rect(this.__x * scale, this.__y * scale, this.__w * scale * this.__val, this.__h * scale);
    }
}


export default WidgetSlider;