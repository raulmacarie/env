///<reference path="reference.ts"/>

// The DOM element for a todo item...

console.log('BView');

import nsCollection = require('collection/Comments');
export class CommentsCollection extends nsCollection.Comments {}

// Hardcoded population of comments array - should come from the server
// for (i = 0; i < 10; i++) {
//     comments[i] = new CommentsModel();
//     comments[i].initialize({ "key": i, name: "Poster " + i, date: new Date(), text: "Poster " + i + " said this comment"});
// }

//export class CommentsModel extends nsModel.Comment { }

export class BView extends Backbone.View {

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.

    comments: CommentsCollection;

    constructor(options?:any) {
        //... is a list tag.
        super(options);

        this.comments = new nsCollection.Comments();
        this.comments.fetch();        
    }

    // Re-render the contents of the todo item.
    render() {
        var _this = this;
        if (this.comments.length !== 0) {
            require(['views/comments'], function (CommentsView) {
                CommentsView.load(_this.comments);
            });
        }
        return this;
    }

}
