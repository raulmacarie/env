/// <reference path="vendor/require/require.d.ts" />

(()=>{

    requirejs.config({
        paths: {
        },

        shim: {
            jquery: {
                exports: '$'
            },

            underscore: {
                exports: '_'
            },

            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
        },
    });

    require(["backbone", "app"],
        ($, _, Backbone, app) => {
            // app.run();
        });
})();