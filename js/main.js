require([
    'phaser-ce',
    'js/tomate',
    'js/fruit'
], function (
    Phaser,
    Tomate,
    Fruit
) {
    var fruit = new Fruit('jaune');
    console.log(fruit.getColor());

    var tomate = new Tomate('rouge');
    console.log(tomate.getColor());
});
