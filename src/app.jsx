'use strict';

var React = require('react');

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    };
  },
  componentDidMount: function(){
    this.timer = setInterval(function(){
      var oldVal = this.state.value;
      var newVal = (oldVal === 'X') ? 'O' : 'X';
      this.setState({
        value: newVal
      });
    }.bind(this), 300);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
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
