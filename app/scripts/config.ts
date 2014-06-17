(()=>{

    require.config({
        urlArgs: "bust=" + (new Date()).getTime(),
        paths: {
            backbone: "../../bower_components/backbone/backbone",
            bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
            jquery: "../../bower_components/jquery/dist/jquery",
            modernizr: "../../bower_components/modernizr/modernizr",
            qunit: "../../bower_components/qunit/qunit/qunit",
            react: "../../bower_components/react/react",
            requirejs: "../../bower_components/requirejs/require",
            underscore: "../../bower_components/underscore/underscore"
        },
        shim: {
            jquery: {
                exports: "$"
            },
            underscore: {
                exports: "_"
            },
            backbone: {
                deps: [
                    "underscore",
                    "jquery"
                ],
                exports: "Backbone"
            }
        },
        packages: [
    
        ]
    });

    require(["jquery", "underscore", "backbone", "app"],
        ($, _, Backbone, app) => {
        });
})();