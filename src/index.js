'use strict';

require('dotenv').config();

var newSessionHandlers = require('./lib/new.js'),
	startStateHandlers = require('./lib/start.js'),
	triviaStateHandlers = require('./lib/trivia.js'),
	helpStateHandlers = require('./lib/help.js'),
	languageString = require('./lib/resources.js'),
	questions = require('./lib/questions.js');

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	if ('undefined' === typeof process.env.DEBUG) {
		alexa.appId = process.env.APP_ID;
	}
	// To enable string internationalization (i18n) features, set a resources object.
	alexa.resources = languageString;
	alexa.registerHandlers(newSessionHandlers, startStateHandlers, triviaStateHandlers, helpStateHandlers);
	alexa.execute();
};
