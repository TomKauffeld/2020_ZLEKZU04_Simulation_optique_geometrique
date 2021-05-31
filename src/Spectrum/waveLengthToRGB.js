/*
https://academo.org/demos/wavelength-to-colour-relationship/
*/
/**
 * 
 * @param {number} wave 
 * @param {number} gamma
 * @returns {{r: number, g: number, b: number}}
 */
function waveLengthToRGB(wave, gamma=0.8) {
    let c = {r: 0, g: 0, b: 0};
    let f = 0;
    const max = 255;
    if (wave > 380) { 
        if (wave < 440) {
            c.r = (440 - wave) / 60;
            c.b = 1;
        } else if (wave < 490) {
            c.g = (wave - 440) / 50;
            c.b = 1;
        } else if (wave < 510) {
            c.g = 1;
            c.b = (510 - wave) / 20;
        } else if (wave < 580) {
            c.r = (wave - 510) / 70;
            c.g = 1;
        } else if (wave < 645) {
            c.r = 1;
            c.g = (645 - wave) / 65;
        } else if (wave < 781) {
            c.r = 1;
        }
        if (wave < 420) {
            f = 0.0175 * wave - 6.35;
        } else if (wave < 701) {
            f = 1;
        } else if (wave < 781) {
            f = 7.125 - 0.00875 * wave;
        }
        c.r = c.r > 0 ? max * Math.pow(c.r * f, gamma) : 0;
        c.g = c.g > 0 ? max * Math.pow(c.g * f, gamma) : 0;
        c.b = c.b > 0 ? max * Math.pow(c.b * f, gamma) : 0;
    }
    return c;
}


export default waveLengthToRGB;