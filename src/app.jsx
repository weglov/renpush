var React = require('react');
var Fetch = require('whatwg-fetch');
var Static = require('./components/static');
var Elements = require('./components/elements');
var ReactDOM = require('react-dom');

var RenStatic = React.createClass({
  render: function() {
    return <Static />
  }
});

var RenElements = React.createClass({
  render: function() {
    return <Elements />
  }
});

var static = React.createElement(RenStatic, {});
var elements = React.createElement(RenElements, {});

ReactDOM.render(static, document.getElementById('b-push__static'));
ReactDOM.render(elements, document.getElementById('b-push__elements'));
