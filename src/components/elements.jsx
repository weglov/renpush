var React = require('react');
var Fetch = require('whatwg-fetch');
var Config = require('./../config');
var Api = require('./../api');
var ListItem = require('./listitem');

module.exports = React.createClass({
	getInitialState: function() {
		var today = new Date();
		today = today.setHours(0, 0, 0, 0);
		 return {
	    	elements: []
	    }
 	 },
 	 componentWillMount: function() {
 	 	Api.get('notifications?app_id='+ Config.app_id +'&limit=10', Config.rest_api)
 	 	.then(function(data){
			this.setState({
				elements: data.notifications
			})
		}.bind(this));
 	},
	render: function() {
		return (
			<table className="push-table">
				<thead>
				<tr>
					<td>Дата</td>
					<td className="push-table__message">Сообщение</td>
					<td><i className="fa fa-paper-plane"></i></td>
					<td><i className="fa fa-share"></i></td>
					<td>CTR</td>
				</tr>
				</thead>
					<tbody>
					{this.state.elements.map(function(elements) {
						return <ListItem key={elements.id} data={elements} />;
					})}
					</tbody>
				</table>
			);	
	}
});