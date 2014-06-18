/// <reference path="../reference.ts" />
import nsComment = require('models/Comment');
export class Comment extends nsComment.Comment { }

// console.log(Backbone.LocalStorage);
// The collection of todos is backed by *localStorage* instead of a remote
// server.
export class Comments extends Backbone.Collection {

    model: typeof Comment;
    localStorage: Backbone.LocalStorage;

    constructor() {

        super();

        // Reference to this collection's model type.
        //this.model = Todo;

        // Save all of the todo items under the `'todos'` namespace.
        this.localStorage = new Backbone.LocalStorage('test');
    }

    // // Filter down the list of all todo items that are finished.
    // done() {
    //     // return this.filter((todo: Todo) => todo.get('done'));
    // }

    // // Filter down the list to only todo items that are still not finished.
    // remaining() {
    //     return this.without.apply(this, this.done());
    // }

    // // We keep the Todos in sequential order, despite being saved by unordered
    // // GUID in the database. This generates the next order number for new items.
    // nextOrder() {
    //     if (!this.length) return 1;
    //     return this.last().get('order') + 1;
    // }

    // // Todos are sorted by their original insertion order.
    // // comparator(todo: Todo) {
    //     // return todo.get('order');
    // // }
}
