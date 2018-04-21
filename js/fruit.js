define([

], function (

) {
    'use strict';
    var Fruit = function (color) {
        this.color = color;
    };
    Fruit.prototype.getColor = function () {
        return this.color;
    };
    return Fruit;
});
