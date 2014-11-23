'use strict';

var React = require('react');

var Box = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.index);
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
      clicks: 0,
      values: ['-', '-', '-']
    };
  },
  handleClick: function(index){
    var newVal = (this.state.clicks % 2 === 1) ? 'O' : 'X'; 
    var values = this.state.values;
    if (values[index] === '-') {
      values[index] = newVal;
      this.setState({
        values: values,
        clicks: this.state.clicks + 1
      });
    }
  },
  render: function(){
    var boxes = this.state.values.map(function(val, index){
      return (
        <Box value={val} key={index} index={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

React.render(<Row />, document.getElementById('content'));
