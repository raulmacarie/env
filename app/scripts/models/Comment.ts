///<reference path="../reference.ts"/>
import Backbone = require("backbone");

console.log('Comments.ts');

export class Comment extends Backbone.Model  {
    // Default attributes for the todo.
    defaults() {
 	return {
 		'name' : 'New Post',
    	'date' : '',
    	'post' : ''
    	};
    }

    initialize() {
    	if (!this.get('name')) {
            this.set({ 'name': this.defaults().name });
        }
    }
};
