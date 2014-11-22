'use strict';

var React = require('react');

var Box = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    );
  }
});

React.render(<Box />, document.getElementById('content'));
