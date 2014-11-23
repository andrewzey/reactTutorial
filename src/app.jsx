'use strict';

var React = require('react');

var Box = React.createClass({
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  },
  render: function(){
    return (
      <button style={this.style}>
        {this.props.text}
      </button>
    );
  }
});

React.render(<Box text="X" />, document.getElementById('content'));
