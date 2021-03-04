/*
infos https://www.physagreg.fr/optique-11-lois-optique-geometrique.php
https://fr.wikipedia.org/wiki/Optique_g%C3%A9om%C3%A9trique

*/


import p5 from 'p5';

/**
 * 
 * @param {p5} sketch 
 */
function s(sketch)
{
    const parent = document.getElementById('sketch');
    sketch.setup = () => {
        sketch.createCanvas(parent.clientWidth, parent.clientHeight);
        sketch.frameRate(60);
    };

    sketch.draw = () => {
        if (parent.clientHeight !== sketch.height || parent.clientWidth !== sketch.width)
        {
            sketch.resizeCanvas(parent.clientWidth, parent.clientHeight);
        }
        sketch.clear();
        sketch.background(0);
    };
}

function fn()
{
    // eslint-disable-next-line no-unused-vars
    const myp5 = new p5(s, 'sketch');
}

if (typeof document.addEventListener === 'function')
{
    document.addEventListener('DOMContentLoaded', fn, false);
}
else if (typeof window.addEventListener === 'function')
{
    window.addEventListener('load', fn, false );
}
else if (typeof document.attachEvent === 'function')
{
    document.attachEvent('onreadystatechange', fn);
}
else if (typeof window.attachEvent === 'function')
{
    window.attachEvent('onload', fn);
}
else
{
    fn();
}