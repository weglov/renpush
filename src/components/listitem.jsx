var React = require('react');
var Config = require('./../config');
var Moment = require('moment');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			conversion: (this.props.data.converted/this.props.data.successful * 100).toFixed(1),
			send: Moment.unix(this.props.data.send_after).format('MM.DD | HH:mm')
		};
	},

  	render: function() {
	    return <tr>
	    <td className="push-table__date">{this.state.send}</td>
	    <td className="push-table__text">{this.props.data.contents.en.substr(0, 140)}</td>
	    <td>{this.props.data.successful}</td>
	    <td>{this.props.data.converted}</td>
	    <td>{this.state.conversion + '%'}</td>
	    </tr>;
	  }
});