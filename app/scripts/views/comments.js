/** @jsx React.DOM */

define(["react", "underscore"], function(React, _) {
    var Comment = React.createClass({displayName: 'Comment',
      render: function() {
        var date = this.props.date
        return (
          React.DOM.div( {className:"comment"}, 
            React.DOM.h2( {className:"commentAuthor"}, 
              this.props.author
            ),
            React.DOM.h3( {className:"commentDate"}, 
              date.toTimeString() + " " + date.toDateString()
            ),
            this.props.children,
            React.DOM.hr(null )
          )
        );
      }
    });

    var CommentList = React.createClass({displayName: 'CommentList',
      render: function() {
        var commentNodes = this.props.data.map(function (comment) {
          return Comment( {author:comment.attributes.name, date:comment.attributes.date}, comment.attributes.text);
        });
        return (
          React.DOM.div( {className:"commentList"}, 
            commentNodes
          )
        );
      }
    });

    var CommentBox = React.createClass({displayName: 'CommentBox',
      render: function() {
        return (
          React.DOM.div( {className:"commentBox"}, 
            React.DOM.h1(null, "TypeScript Backbone Require React jQuery - Boilerplate"),
            CommentList( {data:this.props.data} )
          )
        );
      }
    });
    
    return {
        load: function(data) {
            React.renderComponent(
                CommentBox( {data:data} ),
                document.getElementById('canvas')
            );
        }
    }
});
