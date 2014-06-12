/// <reference path="vendor/backbone/backbone.d.ts" />
/// <reference path="vendor/underscore/underscore.d.ts" />

export class AppRouter extends Backbone.Router {

    routes: any;
    constructor(options?: Backbone.RouterOptions) {

        this.routes = {
            "": "home",
            "about": "about",
            "contact": "contact"
        }

        super(options);
    }

    initialize() {
        // can put more init code here to run after constructor
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