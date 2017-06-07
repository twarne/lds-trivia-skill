var Alexa = require('alexa-sdk');

var constants = require('../lib/constants.js');

module.exports = {
	LaunchRequest: function() {
		this.handler.state = constants.GAME_STATES.START;
		this.emitWithState('StartGame', true);
	},
	'AMAZON.StartOverIntent': function() {
		this.handler.state = constants.GAME_STATES.START;
		this.emitWithState('StartGame', true);
	},
	'AMAZON.HelpIntent': function() {
		this.handler.state = constants.GAME_STATES.HELP;
		this.emitWithState('helpTheUser', true);
	},
	Unhandled: function() {
		var speechOutput = this.t('START_UNHANDLED');
		this.emit(':ask', speechOutput, speechOutput);
	}
};
