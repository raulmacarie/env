///<reference path="../reference.ts"/>
import Backbone = require("backbone");

console.log('Comments.ts');

export class Comment extends Backbone.Model  {
    // Default attributes for the todo.
    initialize(obj) {
    	this.set(obj);
    }
};
