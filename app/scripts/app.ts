/// <reference path="reference.ts" />

import modelView = require('BView');
export class TodoView extends modelView.BView { }

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
        var view = new TodoView();
        view.render();
        //console.log("home");
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