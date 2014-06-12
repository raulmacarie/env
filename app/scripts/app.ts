/* Globals - jQuery, $, Backbone, _ */

// <reference path="vendor/jquery/jquery.d.ts"/>
// <reference path="vendor/backbone/backbone.d.ts"/>


//import your classes
import CommentsModel = require("models/Comments");
//import $ = require("jquery");

//declare a variable representing underscore so this typescript file will compile without errors
// declare var _: any;

//initilize the backbone module
var comments:Array<CommentsModel.Comment> = [],
    i: number;
    
// Hardcoded population of comments array - should come from the server
for (i = 0; i < 10; i++) {
    comments[i] = new CommentsModel.Comment();
    comments[i].initialize({ name: "Poster " + i, date: new Date(), text: "Poster " + i + " said this comment"});
}

require(['scripts/views/comments'], function (CommentsView) {
    CommentsView.load(comments);
});
