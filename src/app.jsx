var React = require('react');
var Fetch = require('whatwg-fetch');
var Static = require('./components/static');
var ReactDOM = require('react-dom');

var RenStatic = React.createClass({
  render: function() {
    return <Static />
  }
});

var element = React.createElement(RenStatic, {});
ReactDOM.render(element, document.getElementById('b-push__static'));
