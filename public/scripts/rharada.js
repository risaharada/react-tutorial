var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments here</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        hey Comment list here.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hey! comment form here.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
