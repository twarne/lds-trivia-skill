var Alexa = require('alexa-sdk');

var game = require('../lib/game.js'),
	constants = require('../lib/constants.js');

function handleUserGuess(userGaveUp) {
	var translatedQuestions = this.t('QUESTIONS');
	var translatedSources = this.t('SOURCES');
	var gameQuestions = this.attributes.questions;
	var questionSources = this.attributes.sources;
	var currentQuestionIndex = parseInt(this.attributes.currentQuestionIndex);
	var answerValue = game.getAnswerSlotValue(this.event.request.intent);
	var answerCorrect = game.isAnswerCorrect(
		translatedQuestions,
		gameQuestions,
		translatedSources,
		questionSources,
		currentQuestionIndex,
		answerValue
	);
	if (answerCorrect) {
		console.log('Answer ' + answerValue + ' is correct');
	} else {
		console.log('Answer ' + answerValue + ' is wrong');
	}
	var speechOutput = '';
	var speechOutputAnalysis = '';
	var currentScore = parseInt(this.attributes.score);
	var correctAnswerText = this.attributes.correctAnswerText;

	if (answerValue && answerCorrect) {
		currentScore++;
		speechOutputAnalysis = this.t('ANSWER_CORRECT_MESSAGE');
	} else {
		if (!userGaveUp) {
			speechOutputAnalysis = this.t('ANSWER_WRONG_MESSAGE');
		}

		speechOutputAnalysis += this.t('CORRECT_ANSWER_MESSAGE', correctAnswerText);
	}

	// Check if we can exit the game session after GAME_LENGTH questions (zero-indexed)
	if (this.attributes['currentQuestionIndex'] == constants.GAME_LENGTH - 1) {
		speechOutput = userGaveUp ? '' : this.t('ANSWER_IS_MESSAGE');
		speechOutput +=
			speechOutputAnalysis +
			this.t('GAME_OVER_MESSAGE', currentScore.toString(), constants.GAME_LENGTH.toString());

		this.emit(':tell', speechOutput);
	} else {
		currentQuestionIndex += 1;
		var spokenQuestion = game.getQuestionText(
			translatedQuestions,
			gameQuestions,
			translatedSources,
			questionSources,
			currentQuestionIndex
		);
		var correctAnswerText = game.getCorrectAnswerText(
			translatedQuestions,
			gameQuestions,
			translatedSources,
			questionSources,
			currentQuestionIndex
		);
		var questionIndexForSpeech = currentQuestionIndex + 1;
		var repromptText = this.t('TELL_QUESTION_MESSAGE', questionIndexForSpeech.toString(), spokenQuestion);

		speechOutput += userGaveUp ? '' : this.t('ANSWER_IS_MESSAGE');
		speechOutput += speechOutputAnalysis + this.t('SCORE_IS_MESSAGE', currentScore.toString()) + repromptText;

		Object.assign(this.attributes, {
			speechOutput: repromptText,
			repromptText: repromptText,
			currentQuestionIndex: currentQuestionIndex,
			questions: gameQuestions,
			sources: questionSources,
			score: currentScore,
			correctAnswerText: correctAnswerText
		});

		this.emit(':askWithCard', speechOutput, repromptText, this.t('GAME_NAME'), repromptText);
	}
}

module.exports = Alexa.CreateStateHandler(constants.GAME_STATES.TRIVIA, {
	AnswerIntent: function() {
		handleUserGuess.call(this, false);
	},
	DontKnowIntent: function() {
		handleUserGuess.call(this, true);
	},
	'AMAZON.StartOverIntent': function() {
		this.handler.state = constants.GAME_STATES.START;
		this.emitWithState('StartGame', false);
	},
	'AMAZON.RepeatIntent': function() {
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptText']);
	},
	'AMAZON.HelpIntent': function() {
		this.handler.state = constants.GAME_STATES.HELP;
		this.emitWithState('helpTheUser', false);
	},
	'AMAZON.StopIntent': function() {
		this.handler.state = constants.GAME_STATES.HELP;
		var speechOutput = this.t('STOP_MESSAGE');
		this.emit(':ask', speechOutput, speechOutput);
	},
	'AMAZON.CancelIntent': function() {
		this.emit(':tell', this.t('CANCEL_MESSAGE'));
	},
	Unhandled: function() {
		var speechOutput = this.t('TRIVIA_UNHANDLED', '9');
		this.emit(':ask', speechOutput, speechOutput);
	},
	SessionEndedRequest: function() {
		console.log('Session ended in trivia state: ' + this.event.request.reason);
	}
});
