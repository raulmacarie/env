/* Globals - jQuery, $, Backbone, _ */

// <reference path="../vendor/jquery/jquery.d.ts"/>
/// <reference path="../vendor/backbone/backbone.d.ts"/>

export class Comment extends Backbone.Model  {
    // Default attributes for the todo.
    initialize(obj) {
    	this.set(obj);
    }
};
