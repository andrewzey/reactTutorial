'use strict';

var React = require('react');

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    };
  },
  render: function(){
    var style = {
      width: '100px',
      height: '100px',
      backgroundColor: 'red'
    };
    return (
      <button style={style}>{this.state.value}</button>
    );
  }
});

React.render(<Box />, document.getElementById('content'));
