'use strict';
require.config({
    paths: {
        'phaser-ce': 'node_modules/phaser-ce/build/phaser.min'
    },
    shim: {
        'phaser-ce': {
            exports: 'Phaser'
        }
    }
});
