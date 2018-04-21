define([
    'js/fruit'
], function (Fruit) {
    'use strict';
    /**
     * @param {string} color
     * @constructor
     */
    var Tomate = function (color) {

        /*
         * Call parent constructor
         */
        Fruit.call(this, color);
    };

    /*
     * Extend parent class
     */
    Tomate.prototype = Object.create(Fruit.prototype);
    Tomate.prototype.constructor = Tomate;

    /**
     * @return {string}
     * @override
     */
    Tomate.prototype.getColor = function () {
        return '[' + this.color + ']';
    };
    return Tomate;
});
