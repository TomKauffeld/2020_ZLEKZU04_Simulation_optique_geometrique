// eslint-disable-next-line no-unused-vars
import {p5InstanceExtensions} from 'p5';

/**
 * @callback onAction
 * @param {p5InstanceExtensions} sketch
 * @param {number} x
 * @param {number} y
 */

class IWidget {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w
     * @param {number} h
     */
    constructor(x, y, w, h) {
        this.__x = x;
        this.__y = y;
        this.__w = w;
        this.__h = h;
        this.__die = false;
        this.__scale = 0;
        this.__lastPressed = false;
        this.__mouse_x = 0;
        this.__mouse_y = 0;
        /**
         * @type {{click: ?onAction, release: ?onAction}}
         */
        this.__on = {
            click: null,
            release: null,
        };
    }

    /**
     * 
     * @param {string} action 
     * @param {onAction} func 
     */
    on(action, func) {
        if (typeof this.__on[action] !== 'undefined') {
            this.__on[action] = func;
        }
    }

    /**
     * 
     * @param {number} x 
     * @param {boolean} rescale 
     * @returns {number}
     */
    __insideX(x, rescale) {
        if (rescale) {
            if (this.__scale > 0) {
                x = x / this.__scale;
            } else {
                return 0;
            }
        }
        return x - this.__x;
    }


    /**
     * 
     * @param {number} x 
     * @param {boolean} rescale 
     * @returns {number}
     */
    __insideY(y, rescale) {
        if (rescale) {
            if (this.__scale > 0) {
                y = y / this.__scale;
            } else {
                return 0;
            }
        }
        return y - this.__y;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {boolean} rescale
     * @returns {boolean}
     */
    __isInside(x, y, rescale) {
        if (rescale) {
            if (this.__scale > 0) {
                x = x / this.__scale;
                y = y / this.__scale;
            } else {
                return false;
            }
        }
        return x >= this.__x && y >= this.__y && x <= this.__x + this.__w && y <= this.__y + this.__h;
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} time 
     */
    // eslint-disable-next-line no-unused-vars
    tick(sketch, time) {
        if (this.__scale > 0) {
            this.__mouse_x = this.__insideX(sketch.mouseX, true);
            this.__mouse_y = this.__insideY(sketch.mouseY, true);
            if (sketch.mouseIsPressed && this.__isInside(sketch.mouseX, sketch.mouseY, true)) {
                if (!this.__lastPressed && typeof this.__on.click === 'function') {
                    this.__on.click(sketch, this.__mouse_x, this.__mouse_y);
                }
                this.__lastPressed = true;
            } else {
                if (this.__lastPressed && typeof this.__on.release === 'function') {
                    this.__on.click(sketch, this.__mouse_x, this.__mouse_y);
                }
                this.__lastPressed = false;
            }
        }
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} scale
     * @param {number} width
     * @param {number} height
     */
    // eslint-disable-next-line no-unused-vars
    render(sketch, scale, width, height) {
        this.__scale = scale;
        sketch.rectMode(sketch.CORNER);
        sketch.stroke(255);
        sketch.strokeWeight(1);
        sketch.noFill();
        sketch.rect(this.__x * scale, this.__y * scale, this.__w * scale, this.__h * scale);
    }

}

export default IWidget;