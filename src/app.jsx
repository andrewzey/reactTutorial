'use strict';

var React = require('react');

var Box = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
});

React.render(<Box text="X"/>, document.getElementById('content'));
