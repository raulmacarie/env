///<reference path="../reference.ts"/>
import Backbone = require("backbone");

console.log('Comments.ts');

export class Comment extends Backbone.Model  {
    // Default attributes for the todo.
    defaults() {
 	return {
 		"name"      : "John Smith",
    	"email"     : "example@domain.com",
    	"telephone" : "555-555-5555"
    	};
    }

    initialize(obj) {
    	this.set(obj);
    }
};
