///<reference path="reference.ts"/>

// The DOM element for a todo item...

import nsModel = require('models/Comments');
export class CommentsModel extends nsModel.Comment {}

var comments:Array<CommentsModel> = [],
    i: number;
    
// Hardcoded population of comments array - should come from the server
for (i = 0; i < 10; i++) {
    comments[i] = new CommentsModel();
    comments[i].initialize({ name: "Poster " + i, date: new Date(), text: "Poster " + i + " said this comment"});
}

//export class CommentsModel extends nsModel.Comment { }

export class BView extends Backbone.View {

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.

    constructor(options?) {
        //... is a list tag.
        super(options);

    }

    // Re-render the contents of the todo item.
    render() {
        require(['views/comments'], function (CommentsView) {
            CommentsView.load(comments);
        });
        return this;
    }

}
