/** @jsx React.DOM */

console.log('addComment.jsx');

define(["react", "underscore", "collection/Comments", "app"], function(React, _, Comments, Router) {
  
    var addComment = React.createClass({
      getInitialState: function() {
        return {name:'',text:'', postDate:''}
      },
      onChangeName: function(e) {
        this.setState({name:e.target.value})
      },
      onChangeText: function(e) {
        this.setState({text:e.target.value})
      },
      handleSubmit: function(e) {
        e.preventDefault();
        var currentDate = new Date();

        comments = new Comments.Comments();
        router = new Router.AppRouter();

        comments.create({name:this.state.name, text:this.state.text, date: currentDate});
        router.navigate('', true);

        this.setState({name:'', text:''});
      },
      componentWillMount: function () {
        console.log('componentWillMount')
      },
      render: function() {
        return (
          <div className="commentBox">
            <h1>addComment</h1>
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.onChangeName} />
            <input type="text" value={this.state.text} onChange={this.onChangeText} />
            <button>Add</button>
            </form>
          </div>
        );
      }
    });
    
    return {
        load: function() {
            React.renderComponent(
                <addComment />,
                document.getElementById('canvas')
            );
        }
    }
});
