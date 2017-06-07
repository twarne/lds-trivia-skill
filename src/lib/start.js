var Alexa = require('alexa-sdk');

var game = require('../lib/game.js'),
	constants = require('../lib/constants.js');

function startGameHandler(newGame) {
	var speechOutput = newGame
		? this.t('NEW_GAME_MESSAGE', this.t('GAME_NAME')) + this.t('WELCOME_MESSAGE', constants.GAME_LENGTH.toString())
		: '';
	console.log('Speech output: ' + speechOutput);
	console.log(this.t);
	// Select GAME_LENGTH questions for the game
	var translatedQuestions = this.t('QUESTIONS');
	var translatedSources = this.t('SOURCES');
	var gameQuestions = game.populateGameQuestions(translatedQuestions);
	var questionSources = game.populateQuestionSources(translatedQuestions, gameQuestions, translatedSources);
	var currentQuestionIndex = 0;
	var spokenQuestion = game.getQuestionText(
		translatedQuestions,
		gameQuestions,
		translatedSources,
		questionSources,
		currentQuestionIndex
	);
	var repromptText = this.t('TELL_QUESTION_MESSAGE', '1', spokenQuestion);
	var correctAnswerText = game.getCorrectAnswerText(
		translatedQuestions,
		gameQuestions,
		translatedSources,
		questionSources,
		currentQuestionIndex
	);

	speechOutput += repromptText;

	Object.assign(this.attributes, {
		speechOutput: repromptText,
		repromptText: repromptText,
		currentQuestionIndex: currentQuestionIndex,
		questions: gameQuestions,
		sources: questionSources,
		score: 0,
		correctAnswerText: correctAnswerText
	});

	// Set the current state to trivia mode. The skill will now use handlers defined in triviaStateHandlers
	this.handler.state = constants.GAME_STATES.TRIVIA;
	this.emit(':askWithCard', speechOutput, repromptText, this.t('GAME_NAME'), repromptText);
}

module.exports = Alexa.CreateStateHandler(constants.GAME_STATES.START, {
	StartGame: startGameHandler
});
