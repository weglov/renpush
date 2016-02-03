var React = require('react');
var Fetch = require('whatwg-fetch');
var Config = require('./config');

module.exports = window.api = {
	get: function(url, type) {
		return fetch(Config.api + url, {
			headers: {
				'Authorization': 'Basic ' + type,
				'Content-Type': 'application/json'
			}
		})
		.then(function(response){
			return response.json();
		})
	}
};