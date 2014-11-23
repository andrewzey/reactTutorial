'use strict';

var React = require('react');

var Box = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.colIndex);
  },
  render: function(){
    var style = {
      width: '100px',
      height: '100px',
      backgroundColor: '#bababa'
    };
    return (
      <button style={style} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
});

var Row = React.createClass({
  handleClick: function(colIndex){
    this.props.handleClick(this.props.rowIndex, colIndex);
  },
  render: function(){
    var boxes = this.props.values.map(function(cell, index){
      return (
        <Box value={cell} key={index} colIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

var Board = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      values: [ 
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
      ]
    }
  },
  handleClick: function(rowIndex, colIndex){
    var newVal = (this.state.clicks % 2 === 1) ? 'O' : 'X'; 
    var values = this.state.values;
    if (values[rowIndex][colIndex] === '-') {
      values[rowIndex][colIndex] = newVal;
      this.setState({
        values: values,
        clicks: this.state.clicks + 1
      });
    }
  },
  render: function(){
    var rows = this.state.values.map(function(row, index){
      return (
        <Row key={index} values={row} rowIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {rows}
      </div>
    );
  }
});

React.render(<Board />, document.getElementById('content'));