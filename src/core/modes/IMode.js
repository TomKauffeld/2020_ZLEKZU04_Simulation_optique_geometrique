// eslint-disable-next-line no-unused-vars
import {p5InstanceExtensions} from 'p5';
// eslint-disable-next-line no-unused-vars
import Context from '../Context';
// eslint-disable-next-line no-unused-vars
import IWidget from '../widgets/IWidget';

class IMode {

    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.__name = name;
        /** @type {Context} */
        this.__context = null;
        /** @type {IWidget[]} */
        this.__widgets = [];
    }

    /**
     * 
     * @param {IWidget} widget 
     */
    addWidget(widget)
    {
        this.__widgets.push(widget);
    }

    /**
     * 
     * @param {IMode} mode 
     */
    setMode(mode)
    {
        if (this.__context !== null) {
            this.__context.setMode(mode);
        }
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} time 
     */
    tick(sketch, time) {
        for (let i = this.__widgets.length - 1; i >= 0; --i) {
            this.__widgets[i].tick(sketch, time);
            if (this.__widgets[i].__die) {
                this.__widgets.splice(i, 1);
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
    render(sketch, scale, width, height) {
        for (let i = this.__widgets.length - 1; i >= 0; --i) {
            this.__widgets[i].render(sketch, scale, width, height);
        }
    }
}


export default IMode;