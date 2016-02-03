var React = require('react');
var Fetch = require('whatwg-fetch');
var Config = require('./../config');
var Api = require('./../api')

module.exports = React.createClass({
	getInitialState: function() {
		var today = new Date();
		today = today.setHours(0, 0, 0, 0);
		 return {
	    	static: [],
	    	newplayer: [],
	    	today: today
	    }
 	 },
 	 componentWillMount: function() {
 	 	Api.get('apps/'+ Config.app_id, Config.auth_user)
 	 	.then(function(data){
			this.setState({
				static: data,
				unsubscribe: data.players - data.messageable_players
			})
		}.bind(this));
		Api.get('players?app_id=' + Config.app_id + '&limit=100', Config.rest_api)
		.then(function(data){
			var today = this.state.today
			var filter_today = data.players.filter(function(data) {
				  return data.created_at*1000 > today;
				})
			this.setState({
				newplayer: filter_today.length
			})
		}.bind(this));

 	},
  	componentWillReceiveProps: function() {

  	},
	render: function() {
		console.log(this.state);
		return <div className="static">
		<h3>Статистика</h3>
			<div className="staticblock">
				<div className="staticblock__elem">
					<div className="staticblock__text">Активных подписчиков</div>
					<div className="staticblock__number">{this.state.static.players}</div>
				</div>
				<div className="staticblock__elem">
					<div className="staticblock__text">Новых сегодня</div>
					<div className="staticblock__number">{this.state.newplayer}</div>
				</div>
				<div className="staticblock__elem">
					<div className="staticblock__text">Отписавшихся</div>
					<div className="staticblock__number">{this.state.unsubscribe}</div>
				</div>
			</div>
		</div>
	},
});