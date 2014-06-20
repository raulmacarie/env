/** @jsx React.DOM */

console.log('comments.jsx');

define(["react", "underscore", "localstorage", "polyglot"], function(React, _, localstorage, Comments) {

var phrasesEn = {
    "car" : "%{smart_count} Auto |||| %{smart_count} Autos",
    "hello" : "Comments %{name}"
};

var phrasesRo = {
    "car" : "%{smart_count} Auto |||| %{smart_count} Autos",
    "hello" : "Comentarii %{name}"
};

var polyglot = new Polyglot({phrases : phrasesEn, locale : "en"});

    var Comment = React.createClass({
      Destroy: function() {
          this.props.onDestroy();       
        },
      render: function() {
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
      getInitialState: function() {

      var test = polyglot.t("hello",{ "name" : "john"});
        return {name:'',text:'', postDate:'', comment: test}
      },
      mixins: [BackboneMixin],
      getBackboneCollections: function () {
        return [this.props.data];
      },
      onChangeLang: function(e) {
        var lang = e.target.value
        if(lang === 'ro') {
            polyglot.phrases = phrasesRo
        }else{
            polyglot.phrases = phrasesEn;            
        }

      var test = polyglot.t("hello",{ "name" : "john"});
      this.setState({comment: test});
      },
      render: function() {
        return (
          <div className="commentBox">
            <h1>{this.state.comment}</h1>
            <select onChange={this.onChangeLang}>
              <option value="en">EN</option>
              <option value="ro">RO</option>
            </select>            
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
