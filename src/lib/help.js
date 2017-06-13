var Alexa = require('alexa-sdk');

var constants = require('../lib/constants.js');

module.exports = Alexa.CreateStateHandler(constants.GAME_STATES.HELP, {
	helpTheUser: function(newGame) {
		var askMessage = newGame
			? this.t('ASK_MESSAGE_START')
			: this.t('REPEAT_QUESTION_MESSAGE') + this.t('STOP_MESSAGE');
		var speechOutput = this.t('HELP_MESSAGE', constants.GAME_LENGTH) + askMessage;
		var repromptText = this.t('HELP_REPROMPT') + askMessage;
		this.emit(':ask', speechOutput, repromptText);
	},
	'AMAZON.StartOverIntent': function() {
		this.handler.state = constants.GAME_STATES.START;
		this.emitWithState('StartGame', false);
	},
	'AMAZON.RepeatIntent': function() {
		var newGame = this.attributes['speechOutput'] && this.attributes['repromptText'] ? false : true;
		this.emitWithState('helpTheUser', newGame);
	},
	'AMAZON.HelpIntent': function() {
		var newGame = this.attributes['speechOutput'] && this.attributes['repromptText'] ? false : true;
		this.emitWithState('helpTheUser', newGame);
	},
	'AMAZON.YesIntent': function() {
		if (this.attributes['speechOutput'] && this.attributes['repromptText']) {
			this.handler.state = constants.GAME_STATES.TRIVIA;
			this.emitWithState('AMAZON.RepeatIntent');
		} else {
			this.handler.state = constants.GAME_STATES.START;
			this.emitWithState('StartGame', false);
		}
	},
	'AMAZON.NoIntent': function() {
		var speechOutput = this.t('NO_MESSAGE');
		this.emit(':tell', speechOutput);
	},
	'AMAZON.StopIntent': function() {
		var speechOutput = this.t('STOP_MESSAGE');
		this.emit(':ask', speechOutput, speechOutput);
	},
	'AMAZON.CancelIntent': function() {
		this.emit(':tell', this.t('CANCEL_MESSAGE'));
	},
	Unhandled: function() {
		var speechOutput = this.t('HELP_UNHANDLED');
		this.emit(':ask', speechOutput, speechOutput);
	},
	SessionEndedRequest: function() {
		console.log('Session ended in help state: ' + this.event.request.reason);
	}
});
