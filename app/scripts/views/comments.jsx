/** @jsx React.DOM */

console.log('comments.jsx');

define(["react", "underscore", "localstorage"], function(React, _, localstorage, Comments) {
    var Comment = React.createClass({
      Destroy: function() {
          this.props.onDestroy();       
        },
      render: function() {
        console.log(this.props);
        //{date.toTimeString() + " " + date.toDateString()}
        var date = this.props.comment.get('date');
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.comment.get('name')}
            </h2>
            <h3 className="commentDate">
              {date}
            </h3>
            {this.props.comment.get('text')}
            <hr />
            <button className="destroy" onClick={this.Destroy} >Del</button>
          </div>
        );
      }
    });

    var CommentList = React.createClass({
      render: function() {

        var commentNodes = this.props.data.map(function (comment) {
          return <Comment key={comment.get('id')} comment={comment} onDestroy={comment.destroy.bind(comment)}/>;
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
      }
    });

    var BackboneMixin = {
        componentDidMount: function () {

          this.getBackboneCollections().forEach(function (model) {
            model.on('add remove change', this.forceUpdate.bind(this, null));
          }, this);
        },

        componentWillUnmount: function () {
          this.getBackboneCollections().forEach(function (model) {
            model.off(null, null, this);
          }, this);
        }
      };

    var CommentBox = React.createClass({
      mixins: [BackboneMixin],
      getBackboneCollections: function () {
        return [this.props.data];
      },
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
                <CommentBox data={data} />,
                document.getElementById('canvas')
            );
        }
    }
});
