(()=>{

    require.config({
        // urlArgs: "bust=" + (new Date()).getTime(),
        paths: {
            backbone: "../../bower_components/backbone/backbone",
            bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
            jquery: "../../bower_components/jquery/dist/jquery",
            modernizr: "../../bower_components/modernizr/modernizr",
            qunit: "../../bower_components/qunit/qunit/qunit",
            react: "../../bower_components/react/react",
            requirejs: "../../bower_components/requirejs/require",
            localstorage: "../../bower_components/backbone.localstorage/backbone.localStorage",
            underscore: "../../bower_components/underscore/underscore",
            polyglot: "polyglot"
        },
        shim: {
            jquery: {
                exports: "$"
            },
            underscore: {
                exports: "_"
            },
            // localstorage: {
            //     deps: ['backbone'],
            //     exports: 'LocalStorage'
            // },
            backbone: {
                deps: [
                    "underscore",
                    "jquery",
                    //"localstorage"
                ],
                exports: "Backbone"
            }
        },
        packages: [
    
        ]
    });

    require(["backbone", "localstorage", "app"],
        (Backbone, LocalStorage, app) => {
        });
})();