///<reference path="../reference.ts"/>
console.log('Comments.ts');
export class Comment extends Backbone.Model  {
    // Default attributes for the todo.
    initialize(obj) {
    	this.set(obj);
    }
};
