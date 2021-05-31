// eslint-disable-next-line no-unused-vars
import {p5InstanceExtensions} from 'p5';
import WidgetSlider from '../widgets/WidgetSlider';
import IMode from './IMode';
import waveLengthToRGB from '../../Spectrum/waveLengthToRGB';

class ModeMain extends IMode {
    constructor() {
        super('Main');
        this.slider_color = new WidgetSlider(2, 0, 4, 0.5, 400, 380, 750);
        this.slider_refrac = new WidgetSlider(2, 0.7, 4, 0.5, 1, 1, 2);
        this.swave = 0;
        this.scolor = {r: 0, g: 0, b: 0};
        this.ewave = 0;
        this.ecolor = {r: 255, g: 0, b: 0};
        this.addWidget(this.slider_color);
        this.addWidget(this.slider_refrac);
    }

    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} x 
     * @param {number} y 
     */
    onClick(sketch, x, y) {
        console.log('click', x, y);
    }


    /**
     * 
     * @param {p5InstanceExtensions} sketch 
     * @param {number} time 
     */
    tick(sketch, time) {
        super.tick(sketch, time);
        this.swave = this.slider_color.getValue();
        this.scolor = waveLengthToRGB(this.swave);
        this.ewave = this.swave / this.slider_refrac.getValue();
        this.ecolor = waveLengthToRGB(this.ewave);



        this.slider_color.setColor(this.scolor.r, this.scolor.g, this.scolor.b);
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
        sketch.fill(this.scolor.r, this.scolor.g, this.scolor.b);
        sketch.rect(0, (height / 2 - 0.5) * scale, (width / 2 - 0.5) * scale, 1 * scale);
        sketch.fill(this.ecolor.r, this.ecolor.g, this.ecolor.b);
        sketch.rect((width / 2 + 0.5) * scale, (height / 2 - 0.5) * scale, (width / 2) * scale, 1 * scale);



        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.fill(255);


        sketch.text(`WaveLength: ${Math.round(this.slider_color.getValue())}`, 0, 0, scale * 2, scale * 0.5);
        sketch.text(`Indice de réfraction: ${Math.round(this.slider_refrac.getValue() * 100) / 100}`, 0, scale * 0.7, scale * 2, scale * 0.5);
    }
}

export default ModeMain;