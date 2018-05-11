define([

], function (

) {
    'use strict';
    /**
     * @param {string} color
     * @constructor
     */
    var Fruit = function (color) {
        this.color = color;
    };

    /**
     * @param {boolean} [toUpper]
     * @returns {string}
     */
    Fruit.prototype.getColor = function (toUpper) {
        toUpper = (typeof toUpper === 'undefined') ? false : toUpper;
        if (toUpper) {
            return this.color.toUpperCase();
        }
        return this.color;
    };
    return Fruit;
});
