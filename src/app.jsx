'use strict';

var React = require('react');

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    };
  },
  handleClick: function(){
    var newVal = this.state.value === 'X' ? 'O' : 'X';
    this.setState({
      value: newVal
    });
  },
  render: function(){
    var style = {
      width: '100px',
      height: '100px',
      backgroundColor: 'red'
    };
    return (
      <button style={style} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
});

var Row = React.createClass({
  getInitialState: function(){
    return {
      values: ['-', '-', '-']
    };
  },
  render: function(){
    var boxes = this.state.values.map(function(val, index){
      return (
        <Box value={val} key={index} />
      )
    });
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

React.render(<Row />, document.getElementById('content'));
