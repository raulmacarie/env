/** @jsx React.DOM */

console.log('comments.jsx');

define(["react", "underscore"], function(React, _) {
    var addComment = React.createClass({
      render: function() {
        //{date.toTimeString() + " " + date.toDateString()}
        var date = this.props.date
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            <h3 className="commentDate">
              {date}
            </h3>
            {this.props.children}
            <hr />
          </div>
        );
      }
    });

    var CommentList = React.createClass({
      render: function() {

        var commentNodes = this.props.data.map(function (comment) {
          return <Comment key={comment.attributes.id} author={comment.attributes.name} date={comment.attributes.date}>{comment.attributes.text}</Comment>;
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
      }
    });

    var CommentBox = React.createClass({
      render: function() {
        return (
          <div className="commentBox">
            <h1>TypeScript Backbone Require React jQuery - Boilerplate</h1>
            <CommentList data={this.props.data} />
          </div>
        );
      }
    });
    
    return {
        load: function(data) {
            React.renderComponent(
                <CommentBox data={data.models} />,
                document.getElementById('canvas')
            );
        }
    }
});
