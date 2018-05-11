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
     * @inheritDoc
     */
    Tomate.prototype.getColor = function (toLower) {
        var color = Fruit.prototype.getColor.call(this, toLower);
        return '[' + color + ']';
    };
    return Tomate;
});
