/// <reference path="reference.ts" />

console.log('app');

import modelView = require("BView");
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
                "add":"add",
                "contact": "contact"
            };
    }
    //test
    home() {
        var view = new TodoView();
        view.render();
        console.log("home1");
    }
    add() {
        console.log("add");
    }
    contact() {
        console.log("contact");
    }
}

var app_router = new AppRouter();

Backbone.history.start();