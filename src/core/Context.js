// eslint-disable-next-line no-unused-vars
import {p5InstanceExtensions} from 'p5';
// eslint-disable-next-line no-unused-vars
import IMode from './modes/IMode';

class Context {

    constructor() {
        this.__mode = null;
    }

    /**
     * 
     * @param {IMode} mode 
     */
    setMode(mode) {
        if (this.__mode !== null) {
            this.__mode.__context = null;
        }
        this.__mode = mode;
        if (this.__mode !== null) {
            this.__mode.__context = this;
        }
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} time 
     */
    tick(sketch, time) {
        if (this.__mode !== null) {
            this.__mode.tick(sketch, time);
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
        if (this.__mode !== null) {
            this.__mode.render(sketch, scale, width, height);
        }
    }


}


export default Context;