/// <reference path="vendor/backbone/backbone.d.ts" />
/// <reference path="vendor/underscore/underscore.d.ts" />

export class AppRouter extends Backbone.Router {

    constructor(options?: Backbone.RouterOptions) {

        super(options);

    }

    initialize() {
        // can put more init code here to run after constructor
    }

    routes() { 
        return {
                "":"home", 
                "about":"about",
                "contact": "contact"
            };
    }

    home() {
        console.log("home");
    }
    about() {
        console.log("about");
    }
    contact() {
        console.log("contact");
    }
}

var app_router = new AppRouter();

Backbone.history.start();